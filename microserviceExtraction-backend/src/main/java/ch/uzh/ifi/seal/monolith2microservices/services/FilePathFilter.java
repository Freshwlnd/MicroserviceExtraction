package ch.uzh.ifi.seal.monolith2microservices.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FilePathFilter {

    @Value("#{'${FilePathFilter.excludePath}'.split(',')}")
    private List<String> excludePath;

    @Value("#{'${FilePathFilter.prefixPath}'.split(',')}")
    private List<String> prefixPath;

    public boolean pathIsValid(String fileName) {

        boolean flag = false;

        for (String prePath : prefixPath) {
            if (fileName.startsWith(prePath)) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            return false;
        }

        for (String exPath : excludePath) {
            if (fileName.startsWith(exPath)) {
                return false;
            }
        }

        return true;

    }

}
