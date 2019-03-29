package com.chengxiaoxiao.base.service;

import com.chengxiaoxiao.base.dao.ArticleDao;
import com.chengxiaoxiao.base.pojo.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import util.HtmlUtil;
import util.IdWorker;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @ClassName: ArticleService
 * @description:
 * @author: Cheng XiaoXiao  (🍊 ^_^ ^_^)
 * @Date: 2019-03-29
 */
@Service
public class ArticleService {

    @Autowired
    private ArticleDao articleDao;
    @Autowired
    private IdWorker idWorker;
    @Autowired
    private HtmlUtil htmlUtil;

    public List<Article> findAll() {
        return articleDao.findAll();
    }

    public Article findById(String id) {
        return articleDao.findById(id).get();
    }

    public void add(Article article) {
        article.setId(idWorker.nextId() + "");
        article.setSimplecontent(htmlUtil.htmlRemoveTag(article.getContent()));
        articleDao.save(article);
    }

    public void update(Article article) {
        article.setSimplecontent(htmlUtil.htmlRemoveTag(article.getContent()));
        articleDao.save(article);
    }

    public void deleteById(String id) {
        articleDao.deleteById(id);
    }

    public List<Article> findSearch(Map searchMap) {

        return articleDao.findAll(new Specification<Article>() {
            @Override
            public Predicate toPredicate(Root<Article> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                Object title = searchMap.get("title");
                if (title != null && !"".equals(title)) {
                    list.add(criteriaBuilder.like(root.get("title").as(String.class), "%" + (String) title + "%"));
                }
                Object content = searchMap.get("simplecontent");
                if (content != null && !"".equals(content)) {
                    list.add(criteriaBuilder.like(root.get("simplecontent").as(String.class), "%" + (String) content + "%"));
                }
                return criteriaBuilder.or(list.toArray(new Predicate[list.size()]));
            }
        });
    }
}
