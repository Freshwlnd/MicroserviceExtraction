package ch.uzh.ifi.seal.monolith2microservices.graph;

import ch.uzh.ifi.seal.monolith2microservices.models.couplings.BaseCoupling;
import ch.uzh.ifi.seal.monolith2microservices.models.evaluation.DynamicMetrics;
import ch.uzh.ifi.seal.monolith2microservices.models.git.Class;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.ClassNode;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.WeightedEdge;
import ch.uzh.ifi.seal.monolith2microservices.utils.comparators.WeightedEdgeComparator;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by freshwlnd on 03/05/21.
 */
public final class DynamicClusterer {

    private final static WeightedEdgeComparator weightedEdgeComparator = new WeightedEdgeComparator();

    private DynamicClusterer(){
        //empty on purpose
    }

    public static Set<Component> clusterWithSplit(List<? extends BaseCoupling> RelationGraph, List<? extends BaseCoupling> CallingGraph, Integer numOfMicroservices) {

        List<WeightedEdge> RelationMST = MinimumSpanningTree.of(RelationGraph).stream().collect(Collectors.toList());
        List<Component> components = ConnectedComponents.connectedComponents(RelationMST);

        normalization(RelationGraph);

        Boolean isChanged = true;

        while(isChanged && components.size()<numOfMicroservices) {
            isChanged = false;

            if(splitByMST(RelationGraph, RelationMST, components)) {
                isChanged = true;
            }

            if(splitCallingGraph(CallingGraph, RelationMST, components)) {
                isChanged = true;
            }

        }

        return new HashSet<>(components);

    }

    private static void pickUpOtherNodes(List<Component> newComponents, List<Component> components) {

        Integer oldNodeNum = 0, newNodeNum = 0;
        for(Component component: newComponents) {
            newNodeNum += component.getSize();
        }
        for(Component component: components) {
            oldNodeNum += component.getSize();
        }

        if(!newNodeNum.equals(oldNodeNum)) {

            Set<String> newNodeSet = new HashSet<>();
            for(Component component: newComponents) {
                for(ClassNode node: component.getNodes()) {
                    newNodeSet.add(node.getId());
                }
            }
            for(Component component: components) {
                for(ClassNode node: component.getNodes()) {
                    if(!newNodeSet.contains(node.getId())) {
                        Component c = new Component();
                        c.addNode(new ClassNode(node.getId()));
                        newComponents.add(c);
                    }
                }
            }

        }

    }

    private static Boolean splitByMST(List<? extends BaseCoupling> RelationGraph, List<WeightedEdge> RelationMST, List<Component> components) {

        if(RelationMST.isEmpty()) return false;
        List<WeightedEdge> newList = new ArrayList<>(RelationMST);
        Collections.sort(newList,weightedEdgeComparator);
        Collections.reverse(newList);
        WeightedEdge deletedEdge = newList.get(0);
        newList.remove(0);
        List<Component> newComponents = ConnectedComponents.connectedComponents(newList);
        pickUpOtherNodes(newComponents, components);   // 没有边的点无法被包入

        DynamicMetrics oldMet = evaluateRelationGraph(RelationGraph, components);
        DynamicMetrics nowMet = evaluateRelationGraph(RelationGraph, newComponents);

        if(RelationMetricsIsImproved(oldMet,nowMet)) {
            RelationMST.clear();
            RelationMST.addAll(newList);
            components.clear();
            components.addAll(newComponents);
            return true;
        }

        return false;

    }

    private static DynamicMetrics evaluateRelationGraph(List<? extends BaseCoupling> RelationGraph, List<Component> components) {

        // 内聚度：component内部点对平均边权
        // 外耦合度： 不同component间点对平均边权

        Map<String, Integer> colors = new HashMap<>(); // 用颜色作为component编号
        Integer colorNo = 0;

        Double preNodeNum = 0.;
        Double Cohesion = 0., Outcoupling = 0.;
        Double CohesionNodeNum = 0., OutcouplingNodeNum = 0.;

        for(Component component: components) {
            for(ClassNode node: component.getNodes()) {
                colors.put(node.getId(), colorNo);
            }
            OutcouplingNodeNum += preNodeNum*component.getSize();
            CohesionNodeNum += 1.0 * (component.getSize()-1) * component.getSize() / 2;
            preNodeNum += component.getSize();
            ++colorNo;
        }

        for(BaseCoupling bc: RelationGraph) {
            if(colors.get(bc.getFirstFileName()).equals(colors.get(bc.getSecondFileName()))) {
                Cohesion += bc.getScore();
            } else {
                Outcoupling += bc.getScore();
            }
        }

//        return new DynamicMetrics(CohesionNodeNum==0?0:Cohesion/CohesionNodeNum, OutcouplingNodeNum==0?0:Outcoupling/OutcouplingNodeNum);
        return new DynamicMetrics(CohesionNodeNum==0?0:Cohesion/CohesionNodeNum, Outcoupling);
    }

    private static Boolean RelationMetricsIsImproved(DynamicMetrics x, DynamicMetrics y) {
        if(x.getCohesion()<=y.getCohesion() && x.getOutcoupling()>=y.getOutcoupling()) return true;
        else if(x.getCohesion()>=y.getCohesion() && x.getOutcoupling()<=y.getOutcoupling()) return false;
        else if(x.getCohesion()<=y.getCohesion()){  // 内聚度变高但外耦合度也变高
            return (x.getCohesion()==0?0:(y.getCohesion()-x.getCohesion())/x.getCohesion()) > (x.getOutcoupling()==0?0:(y.getOutcoupling()-x.getOutcoupling())/x.getOutcoupling());
        } else {// 外耦合度变低但内聚度也变低
            return (x.getCohesion()==0?0:(x.getCohesion()-y.getCohesion())/x.getCohesion()) < (x.getOutcoupling()==0?0:(x.getOutcoupling()-y.getOutcoupling())/x.getOutcoupling());
        }
    }

    private static Boolean splitCallingGraph(List<? extends BaseCoupling> CallingGraph, List<WeightedEdge> RelationMST, List<Component> components) {

        List<WeightedEdge> newMST = new ArrayList<>(RelationMST);

        for(Component component : components) {
            List<String> inDeletedNodes = new ArrayList<>(), outDeletedNodes = new ArrayList<>();
            if(evaluateCallingGraph(CallingGraph, component, inDeletedNodes, outDeletedNodes)) {
                DeleteFromCallingGraph(inDeletedNodes, newMST);
                DeleteFromCallingGraph(outDeletedNodes, newMST);
            }
        }

        List<Component> newComs = new ArrayList<>(ConnectedComponents.connectedComponents(newMST));
        pickUpOtherNodes(newComs, components);   // 没有边的点无法被包入

        if(newComs.size()>components.size()) {
            components.clear();
            components.addAll(newComs);
            RelationMST.clear();
            RelationMST.addAll(newMST);
            return true;
        }

        return false;

    }

    private static void DeleteFromCallingGraph(List<String> deletedNodes, List<WeightedEdge> RelationMST) {

        if(deletedNodes.size() == 0) return;
        String rootNode = deletedNodes.get(0);
        deletedNodes.remove(0);
        Set<String> deletedNodesSet = new HashSet<>(deletedNodes);

        List<WeightedEdge> deleteEdges = new ArrayList<>();
        for(WeightedEdge weightedEdge: RelationMST) {
            if((weightedEdge.getFirstFileName().equals(rootNode) && deletedNodesSet.contains(weightedEdge.getSecondFileName())) ||
                    (weightedEdge.getSecondFileName().equals(rootNode) && deletedNodesSet.contains(weightedEdge.getFirstFileName()))) {
                deleteEdges.add(weightedEdge);
            }
        }
        for(WeightedEdge deleteEdge: deleteEdges) {
            RelationMST.remove(deleteEdge);
        }

    }

    private static Boolean evaluateCallingGraph(List<? extends BaseCoupling> CallingGraph, Component component, List<String> inDeletedNodes, List<String> outDeletedNodes) {

        Double choosedParameter = 2.;

        Map<String, Integer> str2ID = new HashMap<>();
        Map<Integer, String> id2Str = new HashMap<>();
        Integer nowId = 0;

        for(ClassNode node: component.getNodes()) {
            str2ID.put(node.getId(),nowId);
            id2Str.put(nowId, node.getId());
            ++nowId;
        }
        List<Double> inDegree = new ArrayList<>(Collections.nCopies(nowId,0.)), outDegree = new ArrayList<>(Collections.nCopies(nowId,0.));
        List<Double> flow = new ArrayList<>(Collections.nCopies(nowId,0.));

        Double sumInDegree = 0., sumOutDegree = 0., sumFlow = 0.;

        for(BaseCoupling bc: CallingGraph) {
            if(str2ID.containsKey(bc.getFirstFileName()) && str2ID.containsKey(bc.getSecondFileName())) {
                Integer id1 = str2ID.get(bc.getFirstFileName()), id2 = str2ID.get(bc.getSecondFileName());
                inDegree.set(id2, inDegree.get(id2)+1);
                outDegree.set(id1, outDegree.get(id1)+1);
                flow.set(id1, flow.get(id1)+bc.getScore());
                flow.set(id2, flow.get(id2)+bc.getScore());
                sumInDegree += 1;
                sumOutDegree += 1;
                sumFlow += bc.getScore();
            }
        }

        Double InDegreeThreshold = sumInDegree / nowId * choosedParameter;
        Double OutDegreeThreshold = sumOutDegree / nowId * choosedParameter;
        Double FlowThreshold = sumFlow / nowId * choosedParameter;


        Integer biggestInNodeId = -1, biggestOutNodeId = -1;
        Double biggestInNodeVal = -1., biggestOutNodeVal = -1.;
        for(int i=0; i<nowId; i++) {
            if(flow.get(i) >= FlowThreshold) {
                if(inDegree.get(i) >= InDegreeThreshold) {
                    Double nowVal = flow.get(i) * inDegree.get(i);
                    if(biggestInNodeId == -1 || biggestInNodeVal < nowVal) {
                        biggestInNodeId = i;
                        biggestInNodeVal = nowVal;
                    }
                }
                if(outDegree.get(i) >= OutDegreeThreshold) {
                    Double nowVal = flow.get(i) * outDegree.get(i);
                    if(biggestOutNodeId == -1 || biggestOutNodeVal < nowVal) {
                        biggestOutNodeId = i;
                        biggestOutNodeVal = nowVal;
                    }
                }
            }
        }

        if(biggestInNodeId != -1) {
            inDeletedNodes.add(id2Str.get(biggestInNodeId));
            for(BaseCoupling bc: CallingGraph) {
                if(str2ID.containsKey(bc.getSecondFileName()) && str2ID.get(bc.getSecondFileName()).equals(biggestInNodeId)) {
                    inDeletedNodes.add(bc.getFirstFileName());
                }
            }
        }

        if(biggestOutNodeId != -1) {
            outDeletedNodes.add(id2Str.get(biggestOutNodeId));
            for(BaseCoupling bc: CallingGraph) {
                if(str2ID.containsKey(bc.getFirstFileName()) && str2ID.get(bc.getFirstFileName()).equals(biggestOutNodeId)) {
                    inDeletedNodes.add(bc.getSecondFileName());
                }
            }
        }

        return biggestInNodeId!=-1 || biggestOutNodeId!=-1;
    }

    private static void normalization(List<? extends BaseCoupling> RelationGraph) {

        Map<String, Double> sumOfEdgeWeight = new HashMap<>();

        RelationGraph.forEach(coupling -> {
            Double firstWeightSum = sumOfEdgeWeight.get(coupling.getFirstFileName());
            Double secondWeightSum = sumOfEdgeWeight.get(coupling.getSecondFileName());
            if(firstWeightSum == null) {
                firstWeightSum = 0.;
            }
            if(secondWeightSum == null) {
                secondWeightSum = 0.;
            }
            firstWeightSum += coupling.getScore();
            secondWeightSum += coupling.getScore();
            sumOfEdgeWeight.put(coupling.getFirstFileName(),firstWeightSum);
            sumOfEdgeWeight.put(coupling.getSecondFileName(),secondWeightSum);
        });

        RelationGraph.forEach(coupling -> {
            coupling.setScore(coupling.getScore() / (sumOfEdgeWeight.get(coupling.getFirstFileName())+sumOfEdgeWeight.get(coupling.getSecondFileName())));
        });

    }

}
