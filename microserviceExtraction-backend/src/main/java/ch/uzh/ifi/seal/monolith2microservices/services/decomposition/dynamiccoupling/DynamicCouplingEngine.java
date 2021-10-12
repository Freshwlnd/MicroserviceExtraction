package ch.uzh.ifi.seal.monolith2microservices.services.decomposition.dynamiccoupling;

import ch.uzh.ifi.seal.monolith2microservices.main.Configs;
import ch.uzh.ifi.seal.monolith2microservices.models.MethodCallContent;
import ch.uzh.ifi.seal.monolith2microservices.models.couplings.DynamicCoupling;
import ch.uzh.ifi.seal.monolith2microservices.models.git.GitRepository;
import ch.uzh.ifi.seal.monolith2microservices.services.FilePathFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DynamicCouplingEngine {

    @Autowired
    private Configs config;

    @Autowired
    private FilePathFilter filePathFilter;

    GitRepository Repository;

    private List<DynamicCoupling> CallingGraph;

    private List<DynamicCoupling> RelationGraph;

    private List<MethodCallContent> methodCallContents;

    private void computeCouplings(GitRepository repo) throws IOException {

        Repository = repo;
        CallingGraph = new ArrayList<>();
        RelationGraph = new ArrayList<>();

        //Read class files (content) from repo
        String localRepoPath = config.localRepositoryDirectory + "/" + repo.getName() + "_" + repo.getId();

        Path repoDirectory = Paths.get(localRepoPath);

        LogfileVisitor visitor = new LogfileVisitor();
        visitor.setFilePathFilter(filePathFilter);

        Files.walkFileTree(repoDirectory, visitor);

        methodCallContents = visitor.getMethodCallContents();

        // CallingGraph
        Map<String, DynamicCoupling> callingMap = new HashMap<>();
        methodCallContents.forEach(methodCallContent -> {
            methodCallContent.getContent().forEach(content -> {
                if (!content.getCallerClassName().equals(content.getCalleeClassName())) {
                    String key = generateKeyFromFileNamesWithoutSort(content.getCallerClassName(), content.getCalleeClassName());
                    DynamicCoupling callingCoupling = callingMap.get(key);
                    if (callingCoupling == null) {
                        callingCoupling = new DynamicCoupling(content.getCallerClassName(), content.getCalleeClassName(), 1);
                    } else {
                        callingCoupling.setScore(callingCoupling.getScore() + 1);
                    }
                    callingMap.put(key, callingCoupling);
                }
            });
        });
        CallingGraph = callingMap.values().stream().collect(Collectors.toList());

        // RelationGraph
        Map<String, DynamicCoupling> relationMap = new HashMap<>();
        methodCallContents.forEach(methodCallContent -> {
            Set<String> Methods = new HashSet<>();
            methodCallContent.getContent().forEach(content -> {
                Methods.add(content.getCallerClassName());
                Methods.add(content.getCalleeClassName());
            });
            Methods.forEach(a -> {
                Methods.forEach(b -> {
                    if (!a.equals(b)) {
                        String key = generateKeyFromFileNames(a, b);
                        DynamicCoupling relationCoupling = relationMap.get(key);
                        if (relationCoupling == null) {
                            relationCoupling = new DynamicCoupling(a, b, 1);
                        } else {
                            relationCoupling.setScore(relationCoupling.getScore() + 1);
                        }
                        relationMap.put(key, relationCoupling);
                    }
                });
            });
        });
        RelationGraph = relationMap.values().stream().collect(Collectors.toList());

    }

    public List<DynamicCoupling> getRelationGraph(GitRepository repo) throws IOException {
        if (RelationGraph == null || !Repository.equals(repo)) computeCouplings(repo);
        return RelationGraph;
    }

    public List<DynamicCoupling> getCallingGraph(GitRepository repo) throws IOException {
        if (CallingGraph == null || !Repository.equals(repo)) computeCouplings(repo);
        return CallingGraph;
    }

    public List<MethodCallContent> getMethodCallContents(GitRepository repo) throws IOException {
        if (methodCallContents == null || !Repository.equals(repo)) computeCouplings(repo);
        return methodCallContents;
    }

    private String generateKeyFromFileNames(String firstFileName, String secondFileName) {
        List<String> fileNames = new ArrayList<>();
        fileNames.add(firstFileName);
        fileNames.add(secondFileName);
        Collections.sort(fileNames);
        return String.join("|", fileNames);
    }

    private String generateKeyFromFileNamesWithoutSort(String firstFileName, String secondFileName) {
        List<String> fileNames = new ArrayList<>();
        fileNames.add(firstFileName);
        fileNames.add(secondFileName);
        return String.join("|", fileNames);
    }
}
