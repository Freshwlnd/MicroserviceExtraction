package ch.uzh.ifi.seal.monolith2microservices.models.graph;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

/**
 * Created by Genc on 13.12.2016.
 */

@Entity
public class Component {

    @Id
    private Long id;

    @OneToMany(cascade={CascadeType.REMOVE})
    private List<ClassNode> nodes;

    @JsonIgnore
    @Transient
    private boolean visited;

    public Component(){
        id = new Random().nextLong() % System.currentTimeMillis();
        nodes = new ArrayList<>();
        visited = false;
    }

    public Long getId(){
        return this.id;
    }

    public void addNode(ClassNode node){
        nodes.add(node);
    }

    public void setVisited(boolean value){
        this.visited = value;
    }

    @JsonIgnore
    public boolean getVisited(){
        return this.visited;
    }

    public List<ClassNode> getNodes(){
        return this.nodes;
    }

    @JsonIgnore
    public int getSize() {
        return this.nodes.size();
    }


    @JsonIgnore
    public List<String> getFilePaths(){
        return this.nodes.stream().map(classNode -> classNode.getId()).collect(Collectors.toList());
    }

    @Override
    public String toString() {
        return "Component{" +
                "nodes=" + nodes.stream().map(n -> " , " + n.getId()).reduce("", String::concat) + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Component)) return false;

        Component component = (Component) o;

        return nodes.equals(component.nodes);

    }

    @Override
    public int hashCode() {
        return nodes.hashCode();
    }

    public void init1() {
        ClassNode OrderService = new ClassNode();
        OrderService.setId("src.main.java.org.mybatis.jpetstore.service.OrderService");
        addNode(OrderService);
    }

    public void init2() {
        ClassNode CartActionBean = new ClassNode();
        CartActionBean.setId("src.main.java.org.mybatis.jpetstore.web.actions.CartActionBean");
        addNode(CartActionBean);
    }

    public void init3() {
        ClassNode CatalogService = new ClassNode();
        CatalogService.setId("src.main.java.org.mybatis.jpetstore.service.CatalogService");
        addNode(CatalogService);
    }

    public void init4() {
        ClassNode AccountActionBean = new ClassNode();
        AccountActionBean.setId("src.main.java.org.mybatis.jpetstore.web.actions.AccountActionBean");
        ClassNode AccountService = new ClassNode();
        AccountService.setId("src.main.java.org.mybatis.jpetstore.service.AccountService");
        AccountActionBean.addNeighborWithWeight(AccountService,1);
        AccountService.addNeighborWithWeight(AccountActionBean,1);
        addNode(AccountActionBean);
        addNode(AccountService);
    }

    public void init5() {
        ClassNode ItemMapper = new ClassNode();
        ItemMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.ItemMapper");
        ClassNode LineItemMapper = new ClassNode();
        LineItemMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.LineItemMapper");
        ItemMapper.addNeighborWithWeight(LineItemMapper,1);
        LineItemMapper.addNeighborWithWeight(ItemMapper,1);
        addNode(ItemMapper);
        addNode(LineItemMapper);
    }

    public void init6() {
        ClassNode OrderMapper = new ClassNode();
        OrderMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.OrderMapper");
        ClassNode OrderActionBean = new ClassNode();
        OrderActionBean.setId("src.main.java.org.mybatis.jpetstore.web.actions.OrderActionBean");
        ClassNode AccountMapper = new ClassNode();
        AccountMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.AccountMapper");
        ClassNode AbstractActionBean = new ClassNode();
        AbstractActionBean.setId("src.main.java.org.mybatis.jpetstore.web.actions.AbstractActionBean");
        ClassNode CatalogActionBean = new ClassNode();
        CatalogActionBean.setId("src.main.java.org.mybatis.jpetstore.web.actions.CatalogActionBean");
        ClassNode ProductMapper = new ClassNode();
        ProductMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.ProductMapper");
        ClassNode CategoryMapper = new ClassNode();
        CategoryMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.CategoryMapper");
        ClassNode SequenceMapper = new ClassNode();
        SequenceMapper.setId("src.main.java.org.mybatis.jpetstore.mapper.SequenceMapper");
        SequenceMapper.addNeighborWithWeight(CategoryMapper,1);
        CategoryMapper.addNeighborWithWeight(ProductMapper,1);
        ProductMapper.addNeighborWithWeight(CatalogActionBean,1);
        CatalogActionBean.addNeighborWithWeight(AbstractActionBean,1);
        AbstractActionBean.addNeighborWithWeight(OrderActionBean,1);
        OrderActionBean.addNeighborWithWeight(OrderMapper,1);
        OrderActionBean.addNeighborWithWeight(AccountMapper,1);
        addNode(OrderMapper);
        addNode(OrderActionBean);
        addNode(AccountMapper);
        addNode(AbstractActionBean);
        addNode(CatalogActionBean);
        addNode(ProductMapper);
        addNode(CategoryMapper);
        addNode(SequenceMapper);
    }
}
