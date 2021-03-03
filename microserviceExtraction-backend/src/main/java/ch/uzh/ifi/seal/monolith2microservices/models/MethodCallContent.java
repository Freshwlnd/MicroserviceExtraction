package ch.uzh.ifi.seal.monolith2microservices.models;

import java.util.List;

/**
 * Created by freshwlnd on 03/03/21.
 */
public class MethodCallContent {

    private List<MethodCall> content;

    public MethodCallContent(List<MethodCall> content){
        this.content = content;
    }

    public List<MethodCall> getContent() { return content; }

    public void setContent(List<MethodCall> content) { this.content = content; }

}
