package ch.uzh.ifi.seal.monolith2microservices.services.evaluation;

import ch.uzh.ifi.seal.monolith2microservices.main.Configs;
import ch.uzh.ifi.seal.monolith2microservices.models.git.GitRepository;
import ch.uzh.ifi.seal.monolith2microservices.models.graph.Component;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.semanticcoupling.tfidf.TfIdfWrapper;
import ch.uzh.ifi.seal.monolith2microservices.utils.ClassContentFilter;
import ch.uzh.ifi.seal.monolith2microservices.utils.FilterInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Genc on 15.01.2017.
 */
@Service
public class MicroserviceSimilarityService {

    @Autowired
    Configs configs;

    FilterInterface filterInterface = new ClassContentFilter();

    public double computeServiceSimilarity(GitRepository repo, Component firstMicroservice, Component secondMicroservice) throws IOException {
        List<String> firstServiceContent = computeTokenizedServiceContent(repo, firstMicroservice);
        List<String> secondServiceContent = computeTokenizedServiceContent(repo, secondMicroservice);
        return TfIdfWrapper.computeSimilarity(firstServiceContent, secondServiceContent);
    }

    public double computeEveryServiceSimilarity(GitRepository repo, Component microservice) throws IOException {

        String pathPrefix = configs.localRepositoryDirectory + "/" + repo.getName() + "_" + repo.getId();

        List<String> FilePaths = microservice.getFilePaths();
        List<List<String>> contents = new ArrayList<>();
        for (String filePath : FilePaths) {
            String rawContent = getRawFileContent(Paths.get(pathPrefix + "/" + filePath));
            contents.add(filterInterface.filterFileContent(rawContent));
        }

        double sumSim = 0;

        for (int i = 0; i < contents.size(); i++) {
            for (int j = 0; j < contents.size(); j++) {
                if (i == j) continue;

                sumSim += TfIdfWrapper.computeSimilarity(contents.get(i), contents.get(j));

            }
        }

        return sumSim / contents.size();
    }


    private List<String> computeTokenizedServiceContent(GitRepository repo, Component microservice) throws IOException {
        List<String> filePaths = microservice.getFilePaths();
        String pathPrefix = configs.localRepositoryDirectory + "/" + repo.getName() + "_" + repo.getId();

        List<String> content = new ArrayList<>();

        for (String filePath : filePaths) {
            String rawContent = getRawFileContent(Paths.get(pathPrefix + "/" + filePath));
            content.addAll(filterInterface.filterFileContent(rawContent));
        }
        return content;
    }

    private String getRawFileContent(Path path) throws IOException {
        BufferedReader reader = Files.newBufferedReader(path);
        String line;
        StringBuilder sb = new StringBuilder();
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        reader.close();
        return sb.toString();
    }

}
