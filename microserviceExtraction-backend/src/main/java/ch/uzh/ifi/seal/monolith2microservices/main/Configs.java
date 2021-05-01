package ch.uzh.ifi.seal.monolith2microservices.main;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
@EnableAutoConfiguration
@Configuration
public class Configs {
	
	@Value("${git.localrepo}")
	public String localRepositoryDirectory;

	public String localExportDirectory;

	public final String DEV_NULL = "/dev/null";
	

}
