
import React, { Component } from 'react';
import {Link } from 'react-router-dom'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;


export default class Index extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#FFFFFF', }}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to={`/index`}>首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={`/richtext`}>添加知识点</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 82 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    个人知识点管理平台 ©2019 Created by <a href="/">成笑笑</a> | <a href="http://www.chengxiaoxiao.com/">成笑笑博客</a>
                </Footer>
            </Layout>
        );
    }
}