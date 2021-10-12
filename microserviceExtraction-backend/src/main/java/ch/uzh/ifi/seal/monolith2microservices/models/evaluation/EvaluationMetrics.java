package ch.uzh.ifi.seal.monolith2microservices.models.evaluation;

import ch.uzh.ifi.seal.monolith2microservices.models.graph.Decomposition;

import javax.persistence.*;

/**
 * Created by gmazlami on 1/12/17.
 */

@Entity
public class EvaluationMetrics {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne(cascade = {CascadeType.REMOVE})
    private Decomposition decomposition;

    private double contributorsPerMicroservice;

    private double contributorOverlapping;

    private double averageLoc;

    private double averageClassNumber;

    private double similarity;

    private double similarityCohesion;

    private double dynamicCohesion;

    private double dynamicCoupling;

    private long executionTimeMillisStrategy;

    private long executionTimeMillisClustering;

    // Jin WuXia's metrics
    private double CHM;
    private double CHD;
    private double IFN;
    private double OPN;
    private double IRN;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Decomposition getDecomposition() {
        return decomposition;
    }

    public void setDecomposition(Decomposition decomposition) {
        this.decomposition = decomposition;
    }

    public double getContributorsPerMicroservice() {
        return contributorsPerMicroservice;
    }

    public void setContributorsPerMicroservice(double contributorsPerMicroservice) {
        this.contributorsPerMicroservice = contributorsPerMicroservice;
    }

    public double getContributorOverlapping() {
        return contributorOverlapping;
    }

    public void setContributorOverlapping(double contributorOverlapping) {
        this.contributorOverlapping = contributorOverlapping;
    }

    public double getAverageLoc() {
        return averageLoc;
    }

    public void setAverageLoc(double averageLoc) {
        this.averageLoc = averageLoc;
    }

    public double getAverageClassNumber() {
        return averageClassNumber;
    }

    public void setAverageClassNumber(double averageClassNumber) {
        this.averageClassNumber = averageClassNumber;
    }

    public double getSimilarity() {
        return similarity;
    }

    public void setSimilarity(double similarity) {
        this.similarity = similarity;
    }

    public double getSimilarityCohesion() {
        return similarityCohesion;
    }

    public void setSimilarityCohesion(double similarityCohesion) {
        this.similarityCohesion = similarityCohesion;
    }

    public double getDynamicCohesion() {
        return dynamicCohesion;
    }

    public void setDynamicCohesion(double dynamicCohesion) {
        this.dynamicCohesion = dynamicCohesion;
    }

    public double getDynamicCoupling() {
        return dynamicCoupling;
    }

    public void setDynamicCoupling(double dynamicCoupling) {
        this.dynamicCoupling = dynamicCoupling;
    }

    public long getExecutionTimeMillisStrategy() {
        return executionTimeMillisStrategy;
    }

    public void setExecutionTimeMillisStrategy(long executionTimeMillisStrategy) {
        this.executionTimeMillisStrategy = executionTimeMillisStrategy;
    }

    public long getExecutionTimeMillisClustering() {
        return executionTimeMillisClustering;
    }

    public void setExecutionTimeMillisClustering(long executionTimeMillisClustering) {
        this.executionTimeMillisClustering = executionTimeMillisClustering;
    }

    public double getCHM() {
        return CHM;
    }

    public void setCHM(double CHM) {
        this.CHM = CHM;
    }

    public double getCHD() {
        return CHD;
    }

    public void setCHD(double CHD) {
        this.CHD = CHD;
    }

    public double getIFN() {
        return IFN;
    }

    public void setIFN(double IFN) {
        this.IFN = IFN;
    }

    public double getIRN() {
        return IRN;
    }

    public void setIRN(double IRN) {
        this.IRN = IRN;
    }

    public double getOPN() {
        return OPN;
    }

    public void setOPN(double OPN) {
        this.OPN = OPN;
    }

    public void setJinMetrics(double CHM, double CHD, double IFN, double IRN, double OPN) {
        setCHM(CHM);
        setCHD(CHD);
        setIFN(IFN);
        setIRN(IRN);
        setOPN(OPN);
    }

    @Override
    public String toString() {
        return "EvaluationMetrics{" +
                "id=" + id +
                ", decomposition=" + decomposition +
                ", contributorsPerMicroservice=" + contributorsPerMicroservice +
                ", contributorOverlapping=" + contributorOverlapping +
                ", averageLoc=" + averageLoc +
                ", averageClassNumber=" + averageClassNumber +
                ", similarity=" + similarity +
                ", similarityCohesion=" + similarityCohesion +
                ", dynamicCohesion=" + dynamicCohesion +
                ", dynamicCoupling=" + dynamicCoupling +
                ", CHD=" + CHD +
                ", CHM=" + CHM +
                ", IFN=" + IFN +
                ", IRN=" + IRN +
                ", OPN=" + OPN +
                ", executionTimeMillisStrategy=" + executionTimeMillisStrategy +
                ", executionTimeMillisClustering=" + executionTimeMillisClustering +
                '}';
    }
}
