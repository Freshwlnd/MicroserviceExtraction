package ch.uzh.ifi.seal.monolith2microservices.models.couplings;

/**
 * Created by gmazlami on 11/30/16.
 */
public class DynamicCoupling extends BaseCoupling {

    public DynamicCoupling(String firstFileName, String secondFileName, double score) {
        super(firstFileName, secondFileName, score);
    }

}
