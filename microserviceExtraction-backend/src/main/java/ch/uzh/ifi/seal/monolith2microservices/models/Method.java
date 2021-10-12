package ch.uzh.ifi.seal.monolith2microservices.models;

import java.util.List;

public class Method {
    String methodName;
    String className;
    List<String> paraType;
    List<String> retType;
    Integer callTimesByOwnMicro;
    Integer beCalledTimesByOwnMicro;
    Integer callTimesByOtherMicro;
    Integer beCalledTimesByOtherMicro;

    public void mergeToThis(Method otherMethod) {
        this.callTimesByOwnMicro += otherMethod.callTimesByOwnMicro;
        this.beCalledTimesByOwnMicro += otherMethod.beCalledTimesByOwnMicro;
        this.callTimesByOtherMicro += otherMethod.callTimesByOtherMicro;
        this.beCalledTimesByOtherMicro += otherMethod.beCalledTimesByOtherMicro;
    }

    public Method(String className) {
        this.className = className;
    }

    public Method(String methodName, String className, List<String> paraType, List<String> retType) {
        this.methodName = methodName;
        this.className = className;
        this.paraType = paraType;
        this.retType = retType;
        this.callTimesByOtherMicro = this.beCalledTimesByOtherMicro = this.callTimesByOwnMicro = this.beCalledTimesByOwnMicro = 0;
    }

    public Integer getCallTimesByOwnMicro() {
        return callTimesByOwnMicro;
    }

    public void setCallTimesByOwnMicro(Integer callTimesByOwnMicro) {
        this.callTimesByOwnMicro = callTimesByOwnMicro;
    }

    public Integer getBeCalledTimesByOwnMicro() {
        return beCalledTimesByOwnMicro;
    }

    public void setBeCalledTimesByOwnMicro(Integer beCalledTimesByOwnMicro) {
        this.beCalledTimesByOwnMicro = beCalledTimesByOwnMicro;
    }

    public Integer getCallTimesByOtherMicro() {
        return callTimesByOtherMicro;
    }

    public void setCallTimesByOtherMicro(Integer callTimesByOtherMicro) {
        this.callTimesByOtherMicro = callTimesByOtherMicro;
    }

    public Integer getBeCalledTimesByOtherMicro() {
        return beCalledTimesByOtherMicro;
    }

    public void setBeCalledTimesByOtherMicro(Integer beCalledTimesByOtherMicro) {
        this.beCalledTimesByOtherMicro = beCalledTimesByOtherMicro;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public List<String> getParaType() {
        return paraType;
    }

    public void setParaType(List<String> paraType) {
        this.paraType = paraType;
    }

    public List<String> getRetType() {
        return retType;
    }

    public void setRetType(List<String> retType) {
        this.retType = retType;
    }
}
