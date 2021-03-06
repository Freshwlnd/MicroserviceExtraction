package ch.uzh.ifi.seal.monolith2microservices.models;

/**
 * Created by freshwlnd on 03/03/21.
 */
public class LogfilePairContent implements Comparable<LogfilePairContent> {

    private Integer traceId;

    private Integer order;

    private String structType;

    private String method1;

    private String method2;

    private String m1_para;

    private String m2_para;

    private String class1;

    private String class2;

    private String m1_return;

    private String m2_return;

    private Double callingTimes;

    public LogfilePairContent(Integer traceId, Integer order, String structType, String method1, String method2, String m1_para, String m2_para, String class1, String class2, String m1_return, String m2_return, Double callingTimes) {
        this.traceId = traceId;
        this.order = order;
        this.structType = structType;
        this.method1 = method1;
        this.method2 = method2;
        this.m1_para = m1_para;
        this.m2_para = m2_para;
        this.class1 = class1;
        this.class2 = class2;
        this.m1_return = m1_return;
        this.m2_return = m2_return;
        this.callingTimes = callingTimes;
    }

    public Integer getTraceId() {
        return traceId;
    }

    public void setTraceId(Integer traceId) {
        this.traceId = traceId;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public String getStructType() {
        return structType;
    }

    public void setStructType(String structType) {
        this.structType = structType;
    }

    public String getMethod1() {
        return method1;
    }

    public void setMethod1(String method1) {
        this.method1 = method1;
    }

    public String getMethod2() {
        return method2;
    }

    public void setMethod2(String method2) {
        this.method2 = method2;
    }

    public String getM1_para() {
        return m1_para;
    }

    public void setM1_para(String m1_para) {
        this.m1_para = m1_para;
    }

    public String getM2_para() {
        return m2_para;
    }

    public void setM2_para(String m2_para) {
        this.m2_para = m2_para;
    }

    public String getClass1() {
        return class1;
    }

    public void setClass1(String class1) {
        this.class1 = class1;
    }

    public String getClass2() {
        return class2;
    }

    public void setClass2(String class2) {
        this.class2 = class2;
    }

    public String getM1_return() {
        return m1_return;
    }

    public void setM1_return(String m1_return) {
        this.m1_return = m1_return;
    }

    public String getM2_return() {
        return m2_return;
    }

    public void setM2_return(String m2_return) {
        this.m2_return = m2_return;
    }

    public Double getCallingTimes() {
        return callingTimes;
    }

    public void setCallingTimes(Double callingTimes) {
        this.callingTimes = callingTimes;
    }

    @Override
    public int compareTo(LogfilePairContent o) {
        return this.traceId==o.getTraceId()?this.order-o.getOrder():this.traceId-o.getTraceId();
    }
}
