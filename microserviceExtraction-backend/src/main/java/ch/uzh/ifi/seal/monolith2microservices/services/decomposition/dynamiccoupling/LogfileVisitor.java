package ch.uzh.ifi.seal.monolith2microservices.services.decomposition.dynamiccoupling;

import ch.uzh.ifi.seal.monolith2microservices.models.*;
import ch.uzh.ifi.seal.monolith2microservices.services.FilePathFilter;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.MalformedInputException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by freshwlnd on 11/30/16.
 */
public class LogfileVisitor extends SimpleFileVisitor<Path> {

    private static boolean isTest = false;

    // Define a matcher that only matches on .java, .rb. and .py files
    private PathMatcher matcher = FileSystems.getDefault().getPathMatcher("glob:*.logfile");

    private List<MethodCallContent> methodCallContents;

    private FilePathFilter filePathFilter;

    public void setFilePathFilter(FilePathFilter filePathFilter) {
        this.filePathFilter = filePathFilter;
    }

    public LogfileVisitor() {
        this.methodCallContents = new ArrayList<>();
    }

    @Override
    public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) throws IOException {
        try {

            Path name = path.getFileName();

            if (matcher.matches(name)) {

                BufferedReader reader = Files.newBufferedReader(path);
                String currentLine;
                if (isTest) {
                    List<LogfileContent> logfileContents = new ArrayList<>();
                    while ((currentLine = reader.readLine()) != null) {
                        logfileContents.add(transString2LogfileContent(currentLine));
                    }
                    this.methodCallContents = extractMethodCallContentTest(logfileContents);
                } else {
                    List<LogfilePairContent> logfilePairContents = new ArrayList<>();
                    boolean isFirstline = true;
                    while ((currentLine = reader.readLine()) != null) {
                        if (isFirstline) {
                            isFirstline = false;
                            continue;
                        }
                        logfilePairContents.add(transString2LogfilePairContent(currentLine));
                    }
                    this.methodCallContents = extractMethodCallContent(logfilePairContents);
                }

            }

        } catch (MalformedInputException mE) {
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

        return new LogfileContent(methodName, sessionId, traceId, callingOrderId, callingStackDepth);

    }

    private LogfilePairContent transString2LogfilePairContent(String str) {

        // 直接分割无法将空字符串加入数组
        List<String> infos = new ArrayList<>(Arrays.asList(str.split(",(?=([^\\\"]*\\\"[^\\\"]*\\\")*[^\\\"]*$)")));   // 双引号内的逗号不分割

        while (infos.size() < 12) {
            infos.add("");
        }
        if (infos.get(11).equals("")) {
            infos.set(11, "1");
        }
        return new LogfilePairContent(Integer.parseInt(infos.get(0)), Integer.parseInt(infos.get(1)), infos.get(2), "src.main.java." + infos.get(3), "src.main.java." + infos.get(4), infos.get(5), infos.get(6), "src.main.java." + infos.get(7), "src.main.java." + infos.get(8), infos.get(9), infos.get(10), Double.parseDouble(infos.get(11)));

    }

    private List<MethodCallContent> extractMethodCallContent(List<LogfilePairContent> logfilePairContents) {

        Map<Integer, List<LogfilePairContent>> logfileMap = new HashMap<>();

        logfilePairContents.forEach(logfilePairContent -> {
            Integer key = logfilePairContent.getTraceId();
            List<LogfilePairContent> nowLogfilePairContents = logfileMap.get(key);
            if (nowLogfilePairContents == null) {
                nowLogfilePairContents = new ArrayList<>();
            }
            nowLogfilePairContents.add(logfilePairContent);
            logfileMap.put(key, nowLogfilePairContents);
        });

        List<List<LogfilePairContent>> logfilePairContentLists = logfileMap.values().stream().collect(Collectors.toList());

        List<MethodCallContent> methodCallContents = new ArrayList<>();

        logfilePairContentLists.forEach(logfilePairContentsList -> {

            List<MethodCall> methodCalls = new ArrayList<>();

            logfilePairContentsList.forEach(logfilePairContent -> {
                String fileName1 = getRelativeFileName(logfilePairContent.getClass1()), fileName2 = getRelativeFileName(logfilePairContent.getClass2());
                if (filePathFilter.pathIsValid(fileName1) && filePathFilter.pathIsValid(fileName2)) {
                    methodCalls.add(new MethodCall(fileName1, fileName2));
                }
            });

            methodCallContents.add(new MethodCallContent(methodCalls));

        });

        return methodCallContents;

    }

    private List<MethodCallContent> extractMethodCallContentTest(List<LogfileContent> logfileContents) {

        Map<String, List<LogfileContent>> logfileMap = new HashMap<>();

        logfileContents.forEach(logfileContent -> {
            String key = generateKeyFromSessionIdTraceId(logfileContent.getSessionId(), logfileContent.getTraceId());
            List<LogfileContent> nowLogfileContents = logfileMap.get(key);
            if (nowLogfileContents == null) {
                nowLogfileContents = new ArrayList<>();
            }
            nowLogfileContents.add(logfileContent);
            logfileMap.put(key, nowLogfileContents);
        });

        List<List<LogfileContent>> logfileContentListList = logfileMap.values().stream().collect(Collectors.toList());

        List<MethodCallContent> methodCallContents = new ArrayList<>();

        logfileContentListList.forEach(logfileContentsList -> {

            List<MethodCall> methodCalls = new ArrayList<>();
            Collections.sort(logfileContentsList);
            Stack<LogfileContent> stk = new Stack<>();

            logfileContentsList.forEach(logfileContent -> {

                while (!stk.empty() && stk.peek().getCallingStackDepth() >= logfileContent.getCallingStackDepth()) {
                    stk.pop();
                }
                if (!stk.empty()) {
                    methodCalls.add(new MethodCall(getRelativeFileNameTest(stk.peek().getMethodName()), getRelativeFileNameTest(logfileContent.getMethodName())));
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

    private String generateKeyFromSessionIdTraceId(String SessionId, String TraceId) {
        List<String> key = new ArrayList<>();
        key.add(SessionId);
        key.add(TraceId);
        return String.join("|", key);
    }

    private String getRelativeFileNameTest(String methodName) {
        String[] packageNameArray = methodName.split(" ");
        methodName = packageNameArray[packageNameArray.length - 1];
        methodName = methodName.split("\\(")[0];
        return getRelativeFileName(methodName);
    }

    private String getRelativeFileName(String methodName) {
        String[] packageNameArray = methodName.split("\\.");
        List<String> pacageNameList = new ArrayList<>(packageNameArray.length);
        Collections.addAll(pacageNameList, packageNameArray);
        return String.join("/", pacageNameList) + ".java";
    }

}
