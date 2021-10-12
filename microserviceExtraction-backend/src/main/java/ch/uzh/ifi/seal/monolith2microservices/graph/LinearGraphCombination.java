package ch.uzh.ifi.seal.monolith2microservices.graph;

import ch.uzh.ifi.seal.monolith2microservices.models.couplings.*;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by gmazlami on 12/15/16.
 */
public class LinearGraphCombination {

    private List<LogicalCoupling> logicalCouplings;

    private List<SemanticCoupling> semanticCouplings;

    private List<ContributorCoupling> contributorCouplings;

    private List<DynamicCoupling> dynamicCouplings;

    private int logicalCouplingFactor = 1;

    private int semanticCouplingFactor = 1;

    private int contributorCouplingFactor = 1;

    private int dynamicCouplingFactor = 1;

    private boolean needSort = true;

    public static LinearGraphCombination create() {
        return new LinearGraphCombination();
    }

    public LinearGraphCombination setNeedSort(boolean needSort) {
        this.needSort = needSort;
        return this;
    }

    public LinearGraphCombination withLogicalCouplings(List<LogicalCoupling> logicalCouplings) {
        this.logicalCouplings = logicalCouplings;
        return this;
    }

    public LinearGraphCombination withSemanticCouplings(List<SemanticCoupling> semanticCouplings) {
        this.semanticCouplings = semanticCouplings;
        return this;
    }

    public LinearGraphCombination withContributorCouplings(List<ContributorCoupling> contributorCouplings) {
        this.contributorCouplings = contributorCouplings;
        return this;
    }

    public LinearGraphCombination withDynamicCouplings(List<DynamicCoupling> dynamicCouplings) {
        this.dynamicCouplings = dynamicCouplings;
        return this;
    }


    public LinearGraphCombination withLogicalFactor(int factor) {
        this.logicalCouplingFactor = factor;
        return this;
    }

    public LinearGraphCombination withSemanticFactor(int factor) {
        this.semanticCouplingFactor = factor;
        return this;
    }

    public LinearGraphCombination withContributorFactor(int factor) {
        this.contributorCouplingFactor = factor;
        return this;
    }

    public LinearGraphCombination withDynamicFactor(int factor) {
        this.dynamicCouplingFactor = factor;
        return this;
    }


    public List<BaseCoupling> generate() {
        List<CouplingTriple> triples = mapCouplingsOnSameEdge();
        List<BaseCoupling> couplings = new ArrayList<>();
        triples.forEach(t -> {
            double logicalWeight = t.getLogicalCoupling() == null ? 0 : this.logicalCouplingFactor * t.getLogicalCoupling().getScore();
            double semanticWeight = t.getSemanticCoupling() == null ? 0 : this.semanticCouplingFactor * t.getSemanticCoupling().getScore();
            double contributorWeight = t.getContributorCoupling() == null ? 0 : this.contributorCouplingFactor * t.getContributorCoupling().getScore();
            double dynamicWeight = t.getDynamicCoupling() == null ? 0 : this.dynamicCouplingFactor * t.getDynamicCoupling().getScore();
            double combinedWeight = logicalWeight + semanticWeight + contributorWeight + dynamicWeight;
            BaseCoupling coupling = new BaseCoupling(t.getFirstFile(), t.getSecondFile(), combinedWeight);
            couplings.add(coupling);
        });
        return couplings;
    }

    private void presolvePath(BaseCoupling coupling) {
        coupling.setFirstFileName(coupling.getFirstFileName().replaceAll("\\.java$", ""));
        coupling.setFirstFileName(coupling.getFirstFileName().replace('/', '.'));
        coupling.setSecondFileName(coupling.getSecondFileName().replace('/', '.'));
        coupling.setSecondFileName(coupling.getSecondFileName().replaceAll("\\.java$", ""));
    }

    private List<CouplingTriple> mapCouplingsOnSameEdge() {
        Map<String, CouplingTriple> couplingMap = new HashMap<>();

        if (this.logicalCouplings != null) {
            this.logicalCouplings.forEach(l -> {
                presolvePath(l);
                CouplingTriple triple = new CouplingTriple();
                triple.setLogicalCoupling(l);
                triple.setFirstFile(l.getFirstFileName());
                triple.setSecondFile(l.getSecondFileName());
                couplingMap.put(generateKeyFromFileNames(l.getFirstFileName(), l.getSecondFileName()), triple);
            });
        }

        if (this.semanticCouplings != null) {
            this.semanticCouplings.forEach(s -> {
                String key = generateKeyFromFileNames(s.getFirstFileName(), s.getSecondFileName());
                CouplingTriple triple = couplingMap.get(key);
                if (triple == null) {
                    triple = new CouplingTriple();
                    triple.setSemanticCoupling(s);
                    triple.setFirstFile(s.getFirstFileName());
                    triple.setSecondFile(s.getSecondFileName());
                } else {
                    triple.setSemanticCoupling(s);
                }
                couplingMap.put(key, triple);
            });
        }

        if (this.contributorCouplings != null) {
            this.contributorCouplings.forEach(c -> {
                String key = generateKeyFromFileNames(c.getFirstFileName(), c.getSecondFileName());
                CouplingTriple triple = couplingMap.get(key);
                if (triple == null) {
                    triple = new CouplingTriple();
                    triple.setContributorCoupling(c);
                    triple.setFirstFile(c.getFirstFileName());
                    triple.setSecondFile(c.getSecondFileName());
                } else {
                    triple.setContributorCoupling(c);
                }
                couplingMap.put(key, triple);
            });
        }

        if (this.dynamicCouplings != null) {
            this.dynamicCouplings.forEach(d -> {
                String key = generateKeyFromFileNames(d.getFirstFileName(), d.getSecondFileName());
                CouplingTriple triple = couplingMap.get(key);
                if (triple == null) {
                    triple = new CouplingTriple();
                    triple.setDynamicCoupling(d);
                    triple.setFirstFile(d.getFirstFileName());
                    triple.setSecondFile(d.getSecondFileName());
                } else {
                    triple.setDynamicCoupling(d);
                }
                couplingMap.put(key, triple);
            });
        }

        return couplingMap.values().stream().collect(Collectors.toList());
    }

    private String generateKeyFromFileNames(String firstFileName, String secondFileName) {
        List<String> fileNames = new ArrayList<>();
        fileNames.add(firstFileName);
        fileNames.add(secondFileName);
        if (this.needSort) Collections.sort(fileNames);
        return String.join("|", fileNames);
    }

}
