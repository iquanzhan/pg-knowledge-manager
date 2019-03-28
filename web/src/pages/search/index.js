import React, { Component } from 'react';
import { Input, Row, Col, List, Tag } from 'antd';

import "./index.less";

const Search = Input.Search;

class Index extends Component {
    render() {

        const listData = [];
        for (let i = 0; i < 200; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }

        return (
            <div>
                <div className="header">
                    <Row>
                        <Col span={10} offset={2}>
                            <SearchInput />
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col span={10} offset={2}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={listData}
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 10,
                            }}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                >
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={
                                            <span>
                                                <Tag>Ant Design</Tag>
                                                <Tag>设计语言</Tag>
                                                <Tag>蚂蚁金服</Tag>
                                            </span>
                                        }
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>

                </Row>
            </div>
        );
    }
}

class SearchInput extends Component {

    //进行搜索
    search = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Search
                placeholder="请搜索..."
                onSearch={this.search}
                enterButton="搜索"
                size="normal"
            />
        );
    }
}

export default Index;