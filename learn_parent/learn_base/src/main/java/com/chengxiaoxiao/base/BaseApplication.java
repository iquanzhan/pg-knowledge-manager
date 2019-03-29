package com.chengxiaoxiao.base;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import util.HtmlUtil;
import util.IdWorker;

/**
 * @ClassName: BaseApplication
 * @description:
 * @author: Cheng XiaoXiao  (🍊 ^_^ ^_^)
 * @Date: 2019-03-29
 */

@SpringBootApplication
public class BaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(BaseApplication.class);
    }

    @Bean
    public IdWorker idWorker() {
        return new IdWorker(1, 1);
    }
    @Bean
    public HtmlUtil htmlUtil(){
        return new HtmlUtil();
    }

}
