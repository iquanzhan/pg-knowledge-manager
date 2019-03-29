package com.chengxiaoxiao.base.pojo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @ClassName: Article
 * @description: 文章显示类
 * @author: Cheng XiaoXiao  (🍊 ^_^ ^_^)
 * @Date: 2019-03-29
 */
@Entity
@Table(name="tb_article")
public class Article {
    @Id
    private String id;
    private String title;
    private String content;
    private String simplecontent;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSimplecontent() {
        return simplecontent;
    }

    public void setSimplecontent(String simplecontent) {
        this.simplecontent = simplecontent;
    }
}
