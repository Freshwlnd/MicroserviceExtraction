FROM java:8
WORKDIR /home
COPY conjoined-change-0.0.1-SNAPSHOT.jar conjoined-change-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "conjoined-change-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080

# docker image build -t fre5h1nd/microservice-extraction-backend .
# docker run -d --name microservice-extraction-backend -p 8080:8080 --link postgres:postgres -v /home/xyh/repositories:/home/repositories -v /home/xyh/exOutput:/root/exOutput -v /home/xyh/exScript:/root/exScript -it fre5h1nd/microservice-extraction-backend
# --net=host 和主机共用网卡