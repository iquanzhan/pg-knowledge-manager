import React, { Component } from 'react';
import { Input, Row, Col, List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import axios from './../../utils/Axios';
import Home from './../index';
import "./index.less";

const Search = Input.Search;
const { Paragraph } = Typography;

class Index extends Component {

    state = {
        listData: []
    }

    componentDidMount() {
        axios.ajax({
            url: `/article`,
            method: "GET"
        }, this).then(res => {
            this.setState({
                listData: res.data
            })
        })
    }

    //进行搜索
    search = (value) => {
        axios.ajax({
            url: `/article/search`,
            method: "POST",
            data: {
                title: value,
                simplecontent: value
            }
        }, this).then(res => {
            this.setState({
                listData: res.data
            })
        })
    }

    render() {
        return (
            <Home>
                <div className="container">
                    <Row>
                        <Col span={12} offset={6}>
                            <Search
                                placeholder="请搜索..."
                                onSearch={this.search}
                                enterButton="搜索"
                                size="large"
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 50 }}>
                        <Col span={16} offset={4}>
                            <List
                                loading={this.state.loading}
                                bordered
                                locale={{ emptyText: "暂无数据" }}
                                itemLayout="vertical"
                                size="large"
                                dataSource={this.state.listData}
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
                                            title={<Link target="_blank" to={"/article/" + item.id}>{item.title}</Link>}
                                        />
                                        <Paragraph ellipsis={{ rows: 2}}>
                                            {item.simplecontent}
                                        </Paragraph>
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </div>
            </Home>
        );
    }
}
export default Index;