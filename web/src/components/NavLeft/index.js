import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './index.less';
import { Menu } from "antd";
import MenuConfig from "../../config/menuConfig";
import AppLogo from "../../images/navLeft/logo.png";

const SubMenu = Menu.SubMenu;

class Index extends Component {
    state = {
        menuTreeNode: []
    }

    componentDidMount() {

        //init Menu
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>;
        });

    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src={AppLogo} width="34" alt="ant design" />
                    <h1>知识管理系统</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default Index;