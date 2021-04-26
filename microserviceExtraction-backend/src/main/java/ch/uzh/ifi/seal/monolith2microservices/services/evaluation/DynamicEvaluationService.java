package ch.uzh.ifi.seal.monolith2microservices.services.evaluation;


import ch.uzh.ifi.seal.monolith2microservices.main.Configs;
import ch.uzh.ifi.seal.monolith2microservices.models.couplings.DynamicCoupling;
import ch.uzh.ifi.seal.monolith2microservices.models.git.GitRepository;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.dynamiccoupling.DynamicCouplingEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by fre5h1nd on 26.04.2021.
 */
@Service
public class DynamicEvaluationService {

    @Autowired
    Configs configs;

    @Autowired
    DynamicCouplingEngine dynamicCouplingEngine;

    private List<DynamicCoupling> callingGraph;

    public double computeDynamicCoupling(GitRepository repo, Component firstMicroservice, Component secondMicroservice) throws IOException {

        if (callingGraph == null) {
            callingGraph = dynamicCouplingEngine.getCallingGraph(repo);
        }

        Set<String> firstFileNameSet = new HashSet<>(firstMicroservice.getFilePaths());
        Set<String> secondFileNameSet = new HashSet<>(secondMicroservice.getFilePaths());

        return getScoreInTwoSet(firstFileNameSet, secondFileNameSet);

    }

    public double computeEveryMicroserviceDynamic(GitRepository repo, Component microservice) throws IOException {

        if (callingGraph == null) {
            callingGraph = dynamicCouplingEngine.getCallingGraph(repo);
        }

        Set<String> fileNameSet = new HashSet<>(microservice.getFilePaths());

        return getScoreInTwoSet(fileNameSet, fileNameSet);

    }

    private double getScoreInTwoSet(Set<String> firstSet, Set<String> secondSet) {

        double coupling = 0;

        for (DynamicCoupling dc : callingGraph) {
            if (isInTwoSet(dc.getFirstFileName(), dc.getSecondFileName(), firstSet, secondSet)) {
                coupling += dc.getScore();
            }
        }

        return coupling;

    }

    private boolean isInTwoSet(String a, String b, Set<String> set1, Set<String> set2) {

        return (set1.contains(a) && set2.contains(b)) || (set1.contains(b) && set2.contains(a));

    }

}
