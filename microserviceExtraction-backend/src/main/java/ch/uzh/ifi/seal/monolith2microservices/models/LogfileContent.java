package ch.uzh.ifi.seal.monolith2microservices.models;

/**
 * Created by freshwlnd on 03/03/21.
 */
public class LogfileContent implements Comparable<LogfileContent> {

    private String methodName;

    private String sessionId;

    private String traceId;

    private int callingOrderId;

    private int callingStackDepth;

    public LogfileContent(String methodName, String sessionId, String traceId, int callingOrderId, int callingStackDepth){
        this.methodName = methodName;
        this.sessionId = sessionId;
        this.traceId = traceId;
        this.callingOrderId = callingOrderId;
        this.callingStackDepth = callingStackDepth;
    }

    public String getMethodName() { return methodName; }

    public void setMethodName(String methodName) { this.methodName = methodName; }

    public String getSessionId() { return sessionId; }

    public void setSessionId(String sessionId) { this.sessionId = sessionId; }

    public String getTraceId() { return traceId; }

    public void setTraceId(String traceId) { this.traceId = traceId; }

    public int getCallingOrderId() { return callingOrderId; }

    public void setCallingOrderId(int callingOrderId) { this.callingOrderId = callingOrderId; }

    public int getCallingStackDepth() { return callingStackDepth; }

    public void setCallingStackDepth(int callingStackDepth) { this.callingStackDepth = callingStackDepth; }

    @Override
    public int compareTo(LogfileContent o) {
        return this.callingOrderId-o.getCallingOrderId();
    }
}
