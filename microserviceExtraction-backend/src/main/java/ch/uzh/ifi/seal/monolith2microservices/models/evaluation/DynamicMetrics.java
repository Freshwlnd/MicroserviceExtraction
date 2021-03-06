package ch.uzh.ifi.seal.monolith2microservices.models.evaluation;

import java.util.zip.CheckedOutputStream;

public class DynamicMetrics {

    private Double Cohesion;

    private Double Outcoupling;

    public DynamicMetrics() {

    }

    public DynamicMetrics(Double cohesion, Double outcoupling) {
        Cohesion = cohesion;
        Outcoupling = outcoupling;
    }

    public Double getCohesion() {
        return Cohesion;
    }

    public void setCohesion(Double cohesion) {
        Cohesion = cohesion;
    }

    public Double getOutcoupling() {
        return Outcoupling;
    }

    public void setOutcoupling(Double outcoupling) {
        Outcoupling = outcoupling;
    }
}
