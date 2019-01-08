import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './index.less';
import Util from "../../utils/utils";


class Index extends Component {

    state = {
        userName: ''
    }

    componentDidMount() {
        this.setState({
            userName: '做全栈攻城狮'
        })

        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
    }

   


    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎您,{this.state.userName}</span>
                        <a href="javascrpt:void();">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Index;