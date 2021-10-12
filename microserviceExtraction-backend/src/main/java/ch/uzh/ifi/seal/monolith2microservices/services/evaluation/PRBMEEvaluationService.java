package ch.uzh.ifi.seal.monolith2microservices.services.evaluation;


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
import ch.uzh.ifi.seal.monolith2microservices.utils.FilterInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

/**
 * Created by fre5h1nd on 26.04.2021.
 */
@Service
public class PRBMEEvaluationService {

    @Autowired
    Configs configs;

    @Autowired
    DynamicCouplingEngine dynamicCouplingEngine;

    private List<DynamicCoupling> callingGraph;
    private List<MethodCallContent> methodCallContents;

    private Map<Long, Set<String>> micro2class;
    private Map<String, Long> class2micro;
    private Map<Long, Map<String, Method>> methodsInEveryMicro;

    private FilterInterface filterInterface;


    // CHM CHD IFN IRN OPN
    public ArrayList<Double> computeJinMetrics(GitRepository repo, Set<Component> microservices) throws IOException {
        filterInterface = new ClassContentFilter();
        methodCallContents = dynamicCouplingEngine.getMethodCallContents(repo);
        // 给微服务设置id，建立类到微服务的映射()
        buildMapBetweenClassAndMicroservice(microservices);
        // 将所有出现的方法按微服务分类()（只考虑被调用的方法，是否有问题？）
        classifyMethodByMicroservice();
        return new ArrayList<>(Arrays.asList(computeCHM(), computeCHD(), computeIFN(), computeIRN(), computeOPN()));
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
                        chmi.add(CHMSimilarity(method1, method2));    // 求相似度()
                    }
                }
                // 取平均值【除以"方法数*(方法数+1)/2"】
                ansList.add(chmi.stream().mapToDouble(Double::doubleValue).sum() / chmi.size());
            }
        });
        // 取平均
        return ansList.stream().mapToDouble(Double::doubleValue).sum() / ansList.size();
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
                        chdi.add(CHDSimilarity(method1, method2));    // 求相似度()
                    }
                }
                // 取平均值【除以"方法数*(方法数+1)/2"】
                ansList.add(chdi.stream().mapToDouble(Double::doubleValue).sum() / ((chdi.size() + 1) * chdi.size() / 2));
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

    private Double computeIRN() {
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

    private Double computeOPN() {
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
                if (callerMicroId == null || callerMicroId == null) {
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
        return (1d * paraIntersectionSet.size() / paraUnionSet.size() + 1d * retIntersectionSet.size() / retUnionSet.size()) / 2d;
    }

    private Double CHDSimilarity(Method method1, Method method2) {
        Set<String> term1 = new HashSet<>(filterInterface.filterFileContent(method1.getMethodName()));
        Set<String> term2 = new HashSet<>(filterInterface.filterFileContent(method2.getMethodName()));
        Set<String> termUnionSet, termIntersectionSet;
        termUnionSet = new HashSet<>(term1);
        termIntersectionSet = new HashSet<>(term1);
        termUnionSet.addAll(term2);
        termIntersectionSet.retainAll(term2);
        return 1d * termIntersectionSet.size() / termUnionSet.size();
    }

}
