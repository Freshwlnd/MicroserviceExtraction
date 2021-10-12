package ch.uzh.ifi.seal.monolith2microservices.services.evaluation;

import ch.uzh.ifi.seal.monolith2microservices.main.Configs;
import ch.uzh.ifi.seal.monolith2microservices.models.evaluation.EvaluationMetrics;
import ch.uzh.ifi.seal.monolith2microservices.models.evaluation.MicroserviceMetrics;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Decomposition;
import ch.uzh.ifi.seal.monolith2microservices.services.git.AuthorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

/**
 * Created by gmazlami on 1/12/17.
 */

@Service
public class DecompositionEvaluationService {

    private Logger logger = LoggerFactory.getLogger(DecompositionEvaluationService.class);

    @Autowired
    private Configs config;

    @Autowired
    AuthorService authorService;

    @Autowired
    MicroserviceSimilarityService similarityService;

    @Autowired
    DynamicEvaluationService dynamicEvaluationService;

    @Autowired
    PRBMEEvaluationService prbmeEvaluationService;


    public EvaluationMetrics computeMetrics(Decomposition decomposition, List<MicroserviceMetrics> microserviceMetrics) throws IOException {
        EvaluationMetrics metrics = new EvaluationMetrics();
        metrics.setDecomposition(decomposition);
        metrics.setContributorsPerMicroservice(computeContributorPerMicroservice(microserviceMetrics));
        metrics.setContributorOverlapping(computeContributorOverlapping(microserviceMetrics));
        metrics.setAverageLoc(computeAverageLoc(microserviceMetrics));
        metrics.setAverageClassNumber(computeMicroserviceSizeClasses(microserviceMetrics));
        metrics.setSimilarity(computeServiceSimilarity(decomposition));
        metrics.setSimilarityCohesion(computeServiceSimilarityCohesion(decomposition));
        metrics.setDynamicCohesion(computeDynamicCohesion(decomposition));
        metrics.setDynamicCoupling(computeDynamicCoupling(decomposition));
        metrics.setExecutionTimeMillisClustering(decomposition.getClusteringTime());
        metrics.setExecutionTimeMillisStrategy(decomposition.getStrategyTime());
        ArrayList<Double> JinMetrics = computeJinMetrics(decomposition);   // CHM CHD IFN IRN OPN
        metrics.setJinMetrics(JinMetrics.get(0), JinMetrics.get(1), JinMetrics.get(2), JinMetrics.get(3), JinMetrics.get(4));
        return metrics;
    }

    private ArrayList<Double> computeJinMetrics(Decomposition decomposition) throws IOException {
        return prbmeEvaluationService.computeJinMetrics(decomposition.getRepository(), decomposition.getServices());
    }

    private double computeContributorPerMicroservice(List<MicroserviceMetrics> microserviceMetrics) {
        return microserviceMetrics.stream().map(metric -> metric.getNumOfContributors()).mapToDouble(Double::doubleValue).sum() / microserviceMetrics.size();
    }

    private double computeContributorOverlapping(List<MicroserviceMetrics> microserviceMetrics) {
        List<Double> overlappingContributors = new ArrayList<>();
        microserviceMetrics.forEach(firstServiceMetric -> {
            microserviceMetrics.forEach(secondServiceMetric -> {
                overlappingContributors.add((double) getNumberOfOverlappingContributors(firstServiceMetric.getContributors(), secondServiceMetric.getContributors()));
            });
        });
        return overlappingContributors.stream().mapToDouble(Double::doubleValue).sum() / overlappingContributors.size();
    }

    private double computeAverageLoc(List<MicroserviceMetrics> microserviceMetrics) {
        return microserviceMetrics.stream().map(metric -> (double) metric.getSizeInLoc()).mapToDouble(Double::doubleValue).sum() / microserviceMetrics.size();
    }

    private double computeMicroserviceSizeClasses(List<MicroserviceMetrics> microserviceMetrics) {
        return microserviceMetrics.stream().map(metric -> (double) metric.getSizeInClasses()).mapToDouble(Double::doubleValue).sum() / microserviceMetrics.size();
    }

    private double computeServiceSimilarity(Decomposition decomposition) throws IOException {
        if (decomposition.getServices().size() > 1) {
            List<Double> similarities = new ArrayList<>();
            for (Component firstService : decomposition.getServices()) {
                for (Component secondService : decomposition.getServices()) {
                    if (firstService.getId() != secondService.getId()) {
                        similarities.add(similarityService.computeServiceSimilarity(decomposition.getRepository(), firstService, secondService));
                    }
                }
            }
            return similarities.stream().mapToDouble(Double::doubleValue).sum() / similarities.size();
        } else {
            return 1d;
        }
    }

    private double computeServiceSimilarityCohesion(Decomposition decomposition) throws IOException {

        List<Double> simCoh = new ArrayList<>();

        for (Component service : decomposition.getServices()) {
            simCoh.add(similarityService.computeEveryServiceSimilarity(decomposition.getRepository(), service));
        }

        return simCoh.stream().mapToDouble(Double::doubleValue).sum() / simCoh.size();

    }

    private double computeDynamicCohesion(Decomposition decomposition) throws IOException {

        List<Double> cohesion = new ArrayList<>();

        for (Component service : decomposition.getServices()) {
            if (service.getSize() > 1) {
                cohesion.add(dynamicEvaluationService.computeDynamicCoupling(decomposition.getRepository(), service, service));
            } else {
                cohesion.add(1d);
            }
        }

        return cohesion.stream().mapToDouble(Double::doubleValue).sum() / cohesion.size();

    }

    private double computeDynamicCoupling(Decomposition decomposition) throws IOException {

        if (decomposition.getServices().size() > 1) {

            List<Double> couplings = new ArrayList<>();
            for (Component firstService : decomposition.getServices()) {
                for (Component secondService : decomposition.getServices()) {
                    if (firstService.getId() != secondService.getId()) {
                        couplings.add(dynamicEvaluationService.computeDynamicCoupling(decomposition.getRepository(), firstService, secondService));
                    }
                }
            }
            return couplings.stream().mapToDouble(Double::doubleValue).sum() / couplings.size() / 2;

        } else {
            return 1d;
        }

    }

    public int getNumberOfOverlappingContributors(Set<String> firstSet, Set<String> secondSet) {
        Set<String> intersection = new HashSet<>(firstSet);
        intersection.retainAll(secondSet);
        return intersection.size();
    }
}
