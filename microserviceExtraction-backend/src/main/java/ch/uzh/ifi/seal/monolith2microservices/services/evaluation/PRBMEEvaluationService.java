package ch.uzh.ifi.seal.monolith2microservices.services.evaluation;


import antlr.StringUtils;
import ch.uzh.ifi.seal.monolith2microservices.main.Configs;
import ch.uzh.ifi.seal.monolith2microservices.models.Method;
import ch.uzh.ifi.seal.monolith2microservices.models.MethodCall;
import ch.uzh.ifi.seal.monolith2microservices.models.MethodCallContent;
import ch.uzh.ifi.seal.monolith2microservices.models.couplings.DynamicCoupling;
import ch.uzh.ifi.seal.monolith2microservices.models.git.GitRepository;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.ClassNode;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Decomposition;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.dynamiccoupling.DynamicCouplingEngine;
import ch.uzh.ifi.seal.monolith2microservices.utils.ClassContentFilter;
import ch.uzh.ifi.seal.monolith2microservices.utils.DomainTermInClassNameFilter;
import ch.uzh.ifi.seal.monolith2microservices.utils.FilterInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by fre5h1nd on 26.04.2021.
 */
@Service
public class PRBMEEvaluationService {

    @Autowired
    Configs configs;

    @Autowired
    DynamicCouplingEngine dynamicCouplingEngine;

    private List<MethodCallContent> methodCallContents;

    private Map<Long, Set<String>> micro2class;
    private Map<String, Long> class2micro;
    private Map<Long, Map<String, Method>> methodsInEveryMicro;

    private FilterInterface filterInterface;


    // CHD CHM IFN OPN IRN
    public ArrayList<Double> computeJinMetrics(GitRepository repo, Set<Component> microservices) throws IOException {
        filterInterface = new DomainTermInClassNameFilter();
        methodCallContents = dynamicCouplingEngine.getMethodCallContents(repo);
        // 给微服务设置id，建立类到微服务的映射()
        buildMapBetweenClassAndMicroservice(microservices);
        // 将所有出现的方法按微服务分类()（只考虑被调用的方法，是否有问题？）
        classifyMethodByMicroservice();
        return new ArrayList<>(Arrays.asList(computeCHD(), computeCHM(), computeIFN(), computeOPN(), computeIRN()));
    }

    private Double computeCHD() {
        List<Double> ansList = new ArrayList<>();
        // -计算每个微服务内chd-
        methodsInEveryMicro.forEach((microId, methodMap) -> {  // 对每个微服务内的方法
            if (methodMap.size() == 1) {   // 若只存在一个方法
                ansList.add(1d);    // 记为1
            } else {    // 否则
                List<Double> chdi = new ArrayList<>();
                for (Method method1 : methodMap.values()) {
                    for (Method method2 : methodMap.values()) {   // 对任意两个方法
                        if (method1.getMethodName().equals(method2.getMethodName())) {
                            continue;
                        }
                        Double simVal = CHDSimilarity(method1, method2);
                        if (!simVal.equals(-1D))
                            chdi.add(simVal);    // 求相似度()
                    }
                }
                // 取平均值【除以"方法数*(方法数+1)/2"】
                ansList.add(chdi.stream().mapToDouble(Double::doubleValue).sum() / chdi.size());
            }
        });
        // 取平均
        return ansList.stream().mapToDouble(Double::doubleValue).sum() / ansList.size();
    }

    private Double computeCHM() {
        List<Double> ansList = new ArrayList<>();
        // -计算每个微服务内chm-
        methodsInEveryMicro.forEach((microId, methodMap) -> {  // 对每个微服务内的方法
            if (methodMap.size() == 1) {   // 若只存在一个方法
                ansList.add(1d);    // 记为1
            } else {    // 否则
                List<Double> chmi = new ArrayList<>();
                for (Method method1 : methodMap.values()) {
                    for (Method method2 : methodMap.values()) {   // 对任意两个方法
                        if (method1.getMethodName().equals(method2.getMethodName())) {
                            continue;
                        }
                        Double simVal = CHMSimilarity(method1, method2);
                        if (!simVal.equals(-1D))
                            chmi.add(simVal);    // 求相似度()
                    }
                }
                // 取平均值【除以"方法数*(方法数+1)/2"】
                ansList.add(chmi.stream().mapToDouble(Double::doubleValue).sum() / chmi.size());
            }
        });
        // 取平均
        return ansList.stream().mapToDouble(Double::doubleValue).sum() / ansList.size();
    }

    private Double computeIFN() {
        Set<String> classBeCalledByOtherMicro = new HashSet<>();
        // -取出被其他微服务依赖的类-
        methodsInEveryMicro.forEach((microId, methodMap) -> {
            methodMap.forEach((methodName, method) -> {
                // 将过滤后的方法所属的类列举并去重()
                if (method.getBeCalledTimesByOtherMicro() != 0) {
                    classBeCalledByOtherMicro.add(method.getClassName());
                }
            });
        });
        // 求数量
        return 1d * classBeCalledByOtherMicro.size() / micro2class.size();
    }

    private Double computeOPN() {
        Set<String> methodBeCalledByOtherMicro = new HashSet<>();
        // -取出被其他微服务调用的方法-
        methodsInEveryMicro.forEach((microId, methodMap) -> {
            methodMap.forEach((methodName, method) -> {
                // 将过滤后的方法去重()
                if (method.getBeCalledTimesByOtherMicro() != 0) {
                    methodBeCalledByOtherMicro.add(method.getMethodName());
                }
            });
        });
        // 求数量
        return 1d * methodBeCalledByOtherMicro.size();
    }

    private Double computeIRN() {
        Integer beCalledTimesByOtherMicro = 0;
        // -计算不同微服务间的调用次数-
        for (Map<String, Method> methodMap : methodsInEveryMicro.values()) {
            for (Method method : methodMap.values()) {
                // 计算过滤后的方法的调用次数
                beCalledTimesByOtherMicro += method.getBeCalledTimesByOtherMicro();
            }
        }
        return 1d * beCalledTimesByOtherMicro;
    }

    private void buildMapBetweenClassAndMicroservice(Set<Component> microservices) {
        micro2class = new HashMap<>();
        class2micro = new HashMap<>();
        Long nowMicroId = 0L;
        // 遍历微服务，设置映射关系
        for (Component microservice : microservices) {
            // 预处理microservice内类格式，变为"src.main.java.xxx"
            //      在原始方案中的格式为"src/main/java/xxx.java"
            ++nowMicroId;
            Set<String> classes = new HashSet<>(microservice.getFilePaths());
            micro2class.put(nowMicroId, classes);
            for (String oneClass : classes) {
                class2micro.put(oneClass, nowMicroId);
            }
        }
    }

    private void classifyMethodByMicroservice() {
        methodsInEveryMicro = new HashMap<>();
        // 遍历每次调用
        for (MethodCallContent methodCallContent : methodCallContents) {
            for (MethodCall methodCall : methodCallContent.getContent()) {
                Method callerMethod = methodCall.getCallerMethod();
                Method calleeMethod = methodCall.getCalleeMethod();
                Long callerMicroId = class2micro.get(callerMethod.getClassName());
                Long calleeMicroId = class2micro.get(calleeMethod.getClassName());
                if (callerMicroId == null || calleeMicroId == null) {
                    continue;
                }
                // 判断是否为微服务内部调用
                boolean isCallInOneMicro = callerMicroId.equals(calleeMicroId);
                if (isCallInOneMicro) {
                    callerMethod.setCallTimesByOwnMicro(1);
                    calleeMethod.setBeCalledTimesByOwnMicro(1);
                } else {
                    callerMethod.setCallTimesByOtherMicro(1);
                    calleeMethod.setBeCalledTimesByOtherMicro(1);
                }
                // 更新权重
                Map<String, Method> callerMethodSet = methodsInEveryMicro.get(callerMicroId);
                Map<String, Method> calleeMethodSet = methodsInEveryMicro.get(calleeMicroId);
                if (callerMethodSet == null) {
                    callerMethodSet = new HashMap<>();
                    methodsInEveryMicro.put(callerMicroId, callerMethodSet);
                }
                if (calleeMethodSet == null) {
                    calleeMethodSet = new HashMap<>();
                    methodsInEveryMicro.put(calleeMicroId, calleeMethodSet);
                }
                Method rawCallerMethod = callerMethodSet.get(callerMethod.getMethodName());
                Method rawCalleeMethod = calleeMethodSet.get(calleeMethod.getMethodName());
                if (rawCallerMethod == null) {
                    rawCallerMethod = callerMethod;
                } else {
                    rawCallerMethod.mergeToThis(callerMethod);
                }
                if (rawCalleeMethod == null) {
                    rawCalleeMethod = calleeMethod;
                } else {
                    rawCalleeMethod.mergeToThis(calleeMethod);
                }
                methodsInEveryMicro.get(callerMicroId).put(callerMethod.getMethodName(), rawCallerMethod);
                methodsInEveryMicro.get(calleeMicroId).put(calleeMethod.getMethodName(), rawCalleeMethod);
            }
        }
    }

    private Double CHDSimilarity(Method method1, Method method2) {

        Set<String> term1 = filterInterface.filterFileContent(method1.getMethodName().substring(org.apache.commons.lang3.StringUtils.lastOrdinalIndexOf(method1.getMethodName(), ".", 2))).stream().map(String::toLowerCase).collect(Collectors.toSet());
        Set<String> term2 = filterInterface.filterFileContent(method2.getMethodName().substring(org.apache.commons.lang3.StringUtils.lastOrdinalIndexOf(method2.getMethodName(), ".", 2))).stream().map(String::toLowerCase).collect(Collectors.toSet());
        Set<String> termUnionSet, termIntersectionSet;
        termUnionSet = new HashSet<>(term1);
        termIntersectionSet = new HashSet<>(term1);
        termUnionSet.addAll(term2);
        termIntersectionSet.retainAll(term2);
        if (termUnionSet.size() == 0) return -1D;
        return 1d * termIntersectionSet.size() / termUnionSet.size();
    }

    private Double CHMSimilarity(Method method1, Method method2) {
        Set<String> para1 = new HashSet<>(method1.getParaType());
        Set<String> para2 = new HashSet<>(method2.getParaType());
        Set<String> ret1 = new HashSet<>(method1.getRetType());
        Set<String> ret2 = new HashSet<>(method2.getRetType());
        Set<String> paraUnionSet, paraIntersectionSet;
        Set<String> retUnionSet, retIntersectionSet;
        paraUnionSet = new HashSet<>(para1);
        paraIntersectionSet = new HashSet<>(para1);
        retUnionSet = new HashSet<>(ret1);
        retIntersectionSet = new HashSet<>(ret1);
        paraUnionSet.addAll(para2);
        paraIntersectionSet.retainAll(para2);
        retUnionSet.addAll(ret2);
        retIntersectionSet.retainAll(ret2);
        Double paraVal = -1D, retVal = -1D;
        if (paraUnionSet.size() != 0) {
            paraVal = 1d * paraIntersectionSet.size() / paraUnionSet.size();
        }
        if (retUnionSet.size() != 0) {
            retVal = 1d * retIntersectionSet.size() / retUnionSet.size();
        }
        if (paraVal.equals(-1D) && retVal.equals(-1D)) return -1D;
        if (paraVal.equals(-1D)) return retVal;
        if (retVal.equals(-1D)) return paraVal;
        return (paraVal + retVal) / 2D;
    }

}
