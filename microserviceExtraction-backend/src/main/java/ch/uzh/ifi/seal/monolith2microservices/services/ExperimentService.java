package ch.uzh.ifi.seal.monolith2microservices.services;

import ch.uzh.ifi.seal.monolith2microservices.controllers.DecompositionController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class ExperimentService {

    @Value("#{'${pythonScript.Path}'}")
    private String pyPath;

    private Logger logger = LoggerFactory.getLogger(DecompositionController.class);

    public void makeRequests(int requestNum) throws Exception {
        String[] args = new String[] {"python3", pyPath+"makeRequests.py", "--serviceName", "jpetstore6", "--requestNum", String.valueOf(requestNum)};
        Process proc;
        try {
            proc = Runtime.getRuntime().exec(args);
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            String line = null;
            while((line = in.readLine()) != null) {
                logger.info(line);
            }
            in.close();
            BufferedReader err = new BufferedReader(new InputStreamReader(proc.getErrorStream()));
            while((line = err.readLine()) != null) {
                logger.info(line);
            }
            err.close();
            proc.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public Double doPRBME() {
        String[] args = new String[] {"python3", pyPath+"autoRequest.py", "--algorithm", "PRBME"};
        return request(args);
    }

    public Double doMEM() {
        String[] args = new String[]{"python3", pyPath + "autoRequest.py", "--algorithm", "MEM"};
        return request(args);
    }

    private Double request(String[] args) {
        Process proc;
        try {
            proc = Runtime.getRuntime().exec(args);
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            Double time = 0.;
            String line = null;
            while((line = in.readLine()) != null) {
                time = Double.parseDouble(line);
            }
            in.close();
            BufferedReader err = new BufferedReader(new InputStreamReader(proc.getErrorStream()));
            while((line = err.readLine()) != null) {
                logger.info(line);
            }
            err.close();
            proc.waitFor();
            return time;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return -1.;
    }

}
