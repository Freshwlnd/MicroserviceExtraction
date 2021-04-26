package ch.uzh.ifi.seal.monolith2microservices.graph;

import ch.uzh.ifi.seal.monolith2microservices.models.couplings.BaseCoupling;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.ClassNode;
import ch.uzh.ifi.seal.monolith2microservices.utils.comparators.ClassNodeComparator;
import ch.uzh.ifi.seal.monolith2microservices.utils.comparators.ComponentComparator;
import ch.uzh.ifi.seal.monolith2microservices.utils.comparators.WeightedEdgeComparator;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.WeightedEdge;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by Genc on 08.12.2016.
 */
public final class MSTGraphClusterer {


    private final static ComponentComparator componentComparator = new ComponentComparator();

    private final static ClassNodeComparator classNodeComparator = new ClassNodeComparator();

    private final static WeightedEdgeComparator weightedEdgeComparator = new WeightedEdgeComparator();

    private MSTGraphClusterer() {
        //empty on purpose
    }

    private static Set<String> getNodesFromCoupling(List<? extends BaseCoupling> couplings) {

        Set<String> nodes = new HashSet<>();
        for (BaseCoupling bc : couplings) {
            nodes.add(bc.getFirstFileName());
            nodes.add(bc.getSecondFileName());
        }
        return nodes;

    }

    private static Set<String> getNodesFromComponents(List<Component> components) {

        Set<String> nowNodes = new HashSet<>();
        for (Component c : components) {
            for (ClassNode node : c.getNodes()) {
                nowNodes.add(node.getId());
            }
        }
        return nowNodes;

    }

    private static Set<String> pickUpTheIndependency(Set<String> allNodes, Set<String> nowNodes) {

        Set<String> otherNodes = new HashSet<>();
        for (String node : allNodes) {
            if (!nowNodes.contains(node)) {
                otherNodes.add(node);
            }
        }
        return otherNodes;

    }

    private static List<Component> makeComponentFromNode(Set<String> nodes) {

        List<Component> components = new ArrayList<>();
        for (String node : nodes) {
            Component c = new Component();
            c.addNode(new ClassNode(node));
            components.add(c);
        }
        return components;

    }

    public static Set<Component> clusterWithSplit(List<? extends BaseCoupling> couplings, int splitThreshold, int numServices) {

        Set<String> nodes = getNodesFromCoupling(couplings);

        List<Component> components = ConnectedComponents.connectedComponents(computeClusters(MinimumSpanningTree.of(couplings), numServices));

        components.addAll(makeComponentFromNode(pickUpTheIndependency(nodes, getNodesFromComponents(components))));

        while (components.size() > 0) {

            //Sort components ascending according to size (number of nodes)
            components.sort(componentComparator);

            //Reverse collection to get largest component
            Collections.reverse(components);

            Component largest = components.get(0);


            // split largest component if it exceeds size/degree parameter
            if (largest.getSize() > splitThreshold) {
                components.remove(0);
                List<Component> split = splitByDegree(largest);
                components.addAll(split);
            } else {
                return new HashSet<>(components);
            }

        }

        return new HashSet<>(components);
    }

    private static List<Component> splitByDegree(Component component) {
        List<ClassNode> nodes = component.getNodes();
        nodes.sort(classNodeComparator);
        Collections.reverse(nodes);

        ClassNode nodeToRemove = nodes.get(0);
        nodes.remove(0);

        nodes.forEach(node -> {
            node.deleteNeighborWithId(nodeToRemove.getId());
        });

        List<Component> connectedComponents = ConnectedComponents.connectedComponentsFromNodes(nodes);

        Component co = new Component();
        co.addNode(new ClassNode(nodeToRemove.getId()));
        connectedComponents.add(co);

        return connectedComponents.stream().filter(c -> c.getSize() >= 1).collect(Collectors.toList());
    }

    private static Set<String> getNodesFromEdges(Set<WeightedEdge> edges) {
        Set<String> nodes = new HashSet<>();
        for (WeightedEdge we : edges) {
            nodes.add(we.getFirstFileName());
            nodes.add(we.getSecondFileName());
        }
        return nodes;
    }

    private static int numberOfIndepencency(List<WeightedEdge> edgeList, Set<String> nodes) {
        Set<String> newNodes = getNodesFromEdges(new HashSet<>(edgeList));
        int num = 0;
        for (String node : nodes) {
            if (!newNodes.contains(node)) {
                ++num;
            }
        }
        return num;
    }

    private static List<WeightedEdge> computeClusters(Set<WeightedEdge> edges, int numServices) {

        Set<String> nodes = getNodesFromEdges(edges);

        List<WeightedEdge> edgeList = edges.stream().collect(Collectors.toList());
        List<WeightedEdge> oldList = null;

        //Sort ascending in order of distances between the files
        Collections.sort(edgeList, weightedEdgeComparator);

        //Reverse collection so that largest distances are first
        Collections.reverse(edgeList);

        int numConnectedComponents = 1;
        int lastNumConnectedComponents = 1;
        int wantedNumComponents = numServices;

        do {
            oldList = new ArrayList<>(edgeList);

            //delete edge with largest distance
            edgeList.remove(0);

            //compute number of connected components by DFS
            numConnectedComponents = ConnectedComponents.numberOfComponents(edgeList) + numberOfIndepencency(edgeList, nodes);

            //stop if we cannot further improve the decomposition anymore and return last acceptable decomposition
            if (lastNumConnectedComponents > numConnectedComponents) {
                return oldList;
            } else {
                lastNumConnectedComponents = numConnectedComponents;
            }

        } while ((numConnectedComponents < wantedNumComponents) && (!edgeList.isEmpty()));

        return edgeList;
    }

}
