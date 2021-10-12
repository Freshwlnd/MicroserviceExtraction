package ch.uzh.ifi.seal.monolith2microservices.models;

import java.util.List;

/**
 * Created by freshwlnd on 03/03/21.
 */
public class MethodCall {

    Method callerMethod;
    Method calleeMethod;

    public MethodCall(String callerClassName, String calleeClassName) {
        this.callerMethod = new Method(callerClassName);
        this.calleeMethod = new Method(calleeClassName);
    }

    public MethodCall(String callerMethodName, String callerClassName, List<String> callerParaType, List<String> callerRetType, String calleeMethodName, String calleeClassName, List<String> calleeParaType, List<String> calleeRetType) {
        this.callerMethod = new Method(callerMethodName, callerClassName, callerParaType, callerRetType);
        this.calleeMethod = new Method(calleeMethodName, calleeClassName, calleeParaType, calleeRetType);
    }

    public String getCallerClassName() {
        return callerMethod.getClassName();
    }

    public void setCallerClassName(String callerClassName) {
        this.callerMethod.setClassName(callerClassName);
    }

    public String getCalleeClassName() {
        return calleeMethod.getClassName();
    }

    public void setCalleeClassName(String calleeClassName) {
        this.calleeMethod.setClassName(calleeClassName);
    }

    public Method getCallerMethod() {
        return callerMethod;
    }

    public void setCallerMethod(Method callerMethod) {
        this.callerMethod = callerMethod;
    }

    public Method getCalleeMethod() {
        return calleeMethod;
    }

    public void setCalleeMethod(Method calleeMethod) {
        this.calleeMethod = calleeMethod;
    }
}
