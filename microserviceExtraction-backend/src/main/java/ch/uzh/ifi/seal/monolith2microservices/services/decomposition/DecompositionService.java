package ch.uzh.ifi.seal.monolith2microservices.services.decomposition;

import ch.uzh.ifi.seal.monolith2microservices.graph.DynamicClusterer;
import ch.uzh.ifi.seal.monolith2microservices.models.DecompositionParameters;
import ch.uzh.ifi.seal.monolith2microservices.graph.LinearGraphCombination;
import ch.uzh.ifi.seal.monolith2microservices.graph.MSTGraphClusterer;
import ch.uzh.ifi.seal.monolith2microservices.models.couplings.*;
import ch.uzh.ifi.seal.monolith2microservices.models.git.ChangeEvent;
import ch.uzh.ifi.seal.monolith2microservices.models.git.GitRepository;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Decomposition;
import ch.uzh.ifi.seal.monolith2microservices.persistence.ClassNodeRepository;
import ch.uzh.ifi.seal.monolith2microservices.persistence.ComponentRepository;
import ch.uzh.ifi.seal.monolith2microservices.persistence.DecompositionRepository;
import ch.uzh.ifi.seal.monolith2microservices.persistence.ParametersRepository;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.contributors.ContributorCouplingEngine;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.dynamiccoupling.DynamicCouplingEngine;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.logicalcoupling.LogicalCouplingEngine;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.semanticcoupling.SemanticCouplingEngine;
import ch.uzh.ifi.seal.monolith2microservices.services.evaluation.MicroserviceEvaluationService;
import ch.uzh.ifi.seal.monolith2microservices.services.git.HistoryService;
import ch.uzh.ifi.seal.monolith2microservices.services.reporting.TextFileReport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by gmazlami on 12/15/16.
 */
@Service
public class DecompositionService {

    private static final Logger logger = LoggerFactory.getLogger(DecompositionService.class);

    @Autowired
    ClassNodeRepository classNodeRepository;

    @Autowired
    ComponentRepository componentRepository;

    @Autowired
    DecompositionRepository decompositionRepository;

    @Autowired
    ParametersRepository parametersRepository;

    @Autowired
    HistoryService historyService;

    @Autowired
    SemanticCouplingEngine semanticCouplingEngine;

    @Autowired
    LogicalCouplingEngine logicalCouplingEngine;

    @Autowired
    ContributorCouplingEngine contributorCouplingEngine;

    @Autowired
    DynamicCouplingEngine dynamicCouplingEngine;

    @Autowired
    MicroserviceEvaluationService microserviceEvaluationService;

    public Decomposition decompose(GitRepository repository, DecompositionParameters parameters) {

        try {

            List<ChangeEvent> history = computeHistory(repository);

            logger.info("DECOMPOSITION-------------------------");
            logger.info("STRATEGIES: Logical Coupling: " + parameters.isLogicalCoupling() + " Semantic Coupling: " + parameters.isSemanticCoupling() + "  Contributor Coupling: " + parameters.isContributorCoupling() + "  Dynamic Coupling: " + parameters.isDynamicCoupling());
            logger.info("PARAMETERS: History Interval Size (s): " + parameters.getIntervalSeconds() + " Target Number of Services: " + parameters.getNumServices());

            List<BaseCoupling> couplings;

            List<BaseCoupling> callingGraph = new ArrayList<>();

            long strategyStartTimestamp = System.currentTimeMillis();

            LinearGraphCombination lgc = LinearGraphCombination.create();

            if (parameters.isLogicalCoupling()) {
                lgc = lgc.withLogicalCouplings(computeLogicalCouplings(history, parameters));
            }
            if (parameters.isSemanticCoupling()) {
                lgc = lgc.withSemanticCouplings(computeSemanticCouplings(repository));
            }
            if (parameters.isContributorCoupling()) {
                lgc = lgc.withContributorCouplings(computeContributorCouplings(history));
            }
            if (parameters.isDynamicCoupling()) {
                lgc = lgc.withDynamicCouplings(computeDynamicRelationCouplings(repository));
            }

            couplings = lgc.generate();

            if(parameters.isDynamicCoupling()) {

                callingGraph = LinearGraphCombination.create().setNeedSort(false).withDynamicCouplings(computeDynamicCallingCouplings(repository)).generate();

            }

            long strategyExecutionTimeMillis = System.currentTimeMillis() - strategyStartTimestamp;

            long clusteringStartTimestamp = System.currentTimeMillis();

            Set<Component> components;

            if (parameters.isDynamicCoupling()) {

                // 两张图
                components = DynamicClusterer.clusterWithSplit(couplings, callingGraph, parameters.getNumServices());

            } else {

                components = MSTGraphClusterer.clusterWithSplit(couplings, parameters.getSizeThreshold(), parameters.getNumServices());

            }

            long clusteringExecutionTimeMillis = System.currentTimeMillis() - clusteringStartTimestamp;


            logger.info("Saving decomposition to database.");

            components.forEach(c -> {
                c.getNodes().forEach(n -> {
                    classNodeRepository.save(n);
                });
                componentRepository.save(c);
                logger.info(c.toString());
            });

            parametersRepository.save(parameters);

            Decomposition decomposition = new Decomposition();
            decomposition.setComponents(components);
            decomposition.setRepository(repository);
            decomposition.setParameters(parameters);
            decomposition.setHistory(history);
            decomposition.setClusteringTime(clusteringExecutionTimeMillis);
            decomposition.setStrategyTime(strategyExecutionTimeMillis);
            decompositionRepository.save(decomposition);

            logger.info("Saved all decomposition info and components to database!");

            TextFileReport.generate(repository, components);

            return decomposition;

        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage());
            Decomposition emptyDecomposition = new Decomposition();
            emptyDecomposition.setComponents(new HashSet<>());
            emptyDecomposition.setRepository(repository);
            return emptyDecomposition;
        }
    }

    private List<ChangeEvent> computeHistory(GitRepository repo) throws Exception {
        List<ChangeEvent> history = historyService.computeChangeEvents(repo);
        return historyService.cleanHistory(history);
    }

    private List<ContributorCoupling> computeContributorCouplings(List<ChangeEvent> history) throws Exception {
        return contributorCouplingEngine.computeCouplings(history);
    }

    private List<SemanticCoupling> computeSemanticCouplings(GitRepository repository) throws IOException {
        return semanticCouplingEngine.computeCouplings(repository);
    }

    private List<LogicalCoupling> computeLogicalCouplings(List<ChangeEvent> history, DecompositionParameters parameters) throws Exception {
        return logicalCouplingEngine.computeCouplings(history, parameters.getIntervalSeconds());
    }

    private List<DynamicCoupling> computeDynamicRelationCouplings(GitRepository repository) throws IOException {
        return dynamicCouplingEngine.getRelationGraph(repository);
    }

    private List<DynamicCoupling> computeDynamicCallingCouplings(GitRepository repository) throws IOException {
        return dynamicCouplingEngine.getCallingGraph(repository);
    }

}
