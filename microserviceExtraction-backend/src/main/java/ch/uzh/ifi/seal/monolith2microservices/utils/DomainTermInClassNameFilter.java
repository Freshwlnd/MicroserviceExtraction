package ch.uzh.ifi.seal.monolith2microservices.utils;

import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.semanticcoupling.classprocessing.StopWords;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by fre5h1nd on 18.10.2021.
 */
public class DomainTermInClassNameFilter implements FilterInterface {

    @Override
    public List<String> filterFileContent(String rawFileContent) {
        //remove all special symbols
        for (char specialCharacter : StopWords.SPECIAL_SYMBOLS) {
            rawFileContent = rawFileContent.replace(specialCharacter, ' ');
        }

        //tokenize
        String[] tokens = rawFileContent.split("\\s+"); // \s即空格

        List<String> filteredContent = new ArrayList<>(Arrays.asList(tokens));

//        //filter out reserved keywords for programming languages
//        for(String token: tokens){
//            if(!StopWords.JAVA_KEYWORDS.contains(token) && !StopWords.RUBY_KEYWORDS.contains(token) && !StopWords.PYTHON_KEYWORDS.contains(token) && !StopWords.LICENSE_KEYWORDS.contains(token) && (token.length() > 1)){
//                filteredContent.add(token);
//            }
//        }

        // break up camelcase words
        List<String> singleTokens = new ArrayList<>();
        for (String token : filteredContent) {
            singleTokens.addAll(Arrays.asList(StringUtils.splitByCharacterTypeCamelCase(token)));
        }

        singleTokens = singleTokens.stream().map(String::toLowerCase).collect(Collectors.toList());

        // remove generic words used often in frameworks
        List<String> toBeRemoved = new ArrayList<>();
        for (String genericWord : StopWords.NOTDOMAIN_KEYWORDS) {
            for (int i = 0; i < singleTokens.size(); i++) {
                if (singleTokens.get(i).equals(genericWord)) {
                    toBeRemoved.add(singleTokens.get(i));
                }
            }
        }

        singleTokens.removeAll(toBeRemoved);
        return singleTokens;
    }
}
