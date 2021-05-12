package ch.uzh.ifi.seal.monolith2microservices.controllers;


import ch.uzh.ifi.seal.monolith2microservices.services.ExperimentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@Configuration
@EnableAutoConfiguration
@RestController
@Component
public class ExperimentController {

    @Autowired
    ExperimentService experimentService;

    @CrossOrigin
    @RequestMapping(value="/experiment/makeRequests/{requestNum}", method= RequestMethod.GET)
    public ResponseEntity<String> makeRequests(@PathVariable int requestNum) throws Exception {
        experimentService.makeRequests(requestNum);
        return new ResponseEntity<String>("OK", HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/experiment/doPRBME")
    public ResponseEntity<Double> doPRBME() throws Exception {
        Double time = experimentService.doPRBME();
        return new ResponseEntity<Double>(time, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/experiment/doMEM")
    public ResponseEntity<Double> doMEM() throws Exception {
        Double time = experimentService.doMEM();
        return new ResponseEntity<Double>(time, HttpStatus.OK);
    }

}
