package ch.uzh.ifi.seal.monolith2microservices.services.decomposition.dynamiccoupling;

import ch.uzh.ifi.seal.monolith2microservices.main.Configs;
import ch.uzh.ifi.seal.monolith2microservices.models.ClassContent;
import ch.uzh.ifi.seal.monolith2microservices.models.LogfileContent;
import ch.uzh.ifi.seal.monolith2microservices.models.MethodCall;
import ch.uzh.ifi.seal.monolith2microservices.models.MethodCallContent;
import ch.uzh.ifi.seal.monolith2microservices.models.couplings.CouplingTriple;
import ch.uzh.ifi.seal.monolith2microservices.models.git.GitRepository;
import ch.uzh.ifi.seal.monolith2microservices.services.decomposition.semanticcoupling.classprocessing.StopWords;
import ch.uzh.ifi.seal.monolith2microservices.utils.FilterInterface;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.MalformedInputException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by gmazlami on 11/30/16.
 */
public class LogfileVisitor extends SimpleFileVisitor<Path> {

    // Define a matcher that only matches on .java, .rb. and .py files
    private PathMatcher matcher = FileSystems.getDefault().getPathMatcher("glob:*.logfile");

    private List<MethodCallContent> methodCallContents;

    public LogfileVisitor() {
        this.methodCallContents = new ArrayList<>();
    }

    @Override
    public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) throws IOException {
        try{

            Path name = path.getFileName();
            if(matcher.matches(name)){
                List<LogfileContent> logfileContents = new ArrayList<>();

                BufferedReader reader = Files.newBufferedReader(path);
                String currentLine;
                while((currentLine = reader.readLine()) != null){
                    logfileContents.add(transString2LogfileContent(currentLine));
                }

                this.methodCallContents = extractMethodCallContent(logfileContents);
            }

        } catch(MalformedInputException mE){
            System.out.println(path.getFileName());
        }
        return FileVisitResult.CONTINUE;
    }

    private LogfileContent transString2LogfileContent(String str) {

        String[] infos = str.split(";");

        String methodName = infos[2].trim();
        String sessionId = infos[3].trim();
        String traceId = infos[4].trim();
        int callingOrderId = Integer.parseInt(infos[8].trim());
        int callingStackDepth = Integer.parseInt(infos[9].trim());

        return new LogfileContent(methodName,sessionId,traceId,callingOrderId,callingStackDepth);

    }

    private List<MethodCallContent> extractMethodCallContent(List<LogfileContent> logfileContents) {

        Map<String, List<LogfileContent>> logfileMap = new HashMap<>();

        if(logfileContents != null) {
            logfileContents.forEach(logfileContent -> {
                String key = generateKeyFromSessionIdTraceId(logfileContent.getSessionId(),logfileContent.getTraceId());
                List<LogfileContent> nowLogfileContents = logfileMap.get(key);
                if(nowLogfileContents == null) {
                    nowLogfileContents = new ArrayList<>();
                }
                nowLogfileContents.add(logfileContent);
                logfileMap.put(key,nowLogfileContents);
            });
        }

        List<List<LogfileContent>> logfileContentListList = logfileMap.values().stream().collect(Collectors.toList());

        List<MethodCallContent> methodCallContents = new ArrayList<>();

        logfileContentListList.forEach(logfileContentsList -> {

            List<MethodCall> methodCalls = new ArrayList<>();
            Collections.sort(logfileContentsList);
            Stack<LogfileContent> stk = new Stack<>();

            logfileContentsList.forEach(logfileContent -> {

                while(!stk.empty() && stk.peek().getCallingStackDepth() >= logfileContent.getCallingStackDepth()) {
                    stk.pop();
                }
                if(!stk.empty()) {
                    methodCalls.add(new MethodCall(getRelativeFileName(stk.peek().getMethodName()), getRelativeFileName(logfileContent.getMethodName())));
                }
                stk.push(logfileContent);


            });

            methodCallContents.add(new MethodCallContent(methodCalls));
        });

        return methodCallContents;
    }

    public List<MethodCallContent> getMethodCallContents() {
        return this.methodCallContents;
    }

    private String generateKeyFromSessionIdTraceId(String SessionId, String TraceId){
        List<String> key = new ArrayList<>();
        key.add(SessionId);
        key.add(TraceId);
        return String.join("|",key);
    }

    private String getRelativeFileName(String methodName){
        String[] packageNameArray = methodName.split(" ");
        methodName = packageNameArray[packageNameArray.length-1];
        methodName = methodName.split("\\(")[0];
        packageNameArray = methodName.split("\\.");
        int n = packageNameArray.length-1;
        List<String> pacageNameList = new ArrayList<>();
        for(int i=0; i<n; i++) {
            pacageNameList.add(packageNameArray[i]);
        }
        return String.join("/",pacageNameList)+".java";
    }


}
