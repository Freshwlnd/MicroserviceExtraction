package ch.uzh.ifi.seal.monolith2microservices.models;

/**
 * Created by freshwlnd on 03/03/21.
 */
public class MethodCall {

    private String callerMethodName;

    private String calleeMethodName;

    public MethodCall(String callerMethodName, String calleeMethodName){
        this.callerMethodName = callerMethodName;
        this.calleeMethodName = calleeMethodName;
    }

    public String getCallerMethodName() { return callerMethodName; }

    public void setCallerMethodName(String callerMethodName) { this.callerMethodName = callerMethodName; }

    public String getCalleeMethodName() { return calleeMethodName; }

    public void setCalleeMethodName(String calleeMethodName) { this.calleeMethodName = calleeMethodName; }

}
