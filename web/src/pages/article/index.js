import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'antd';

import './index.less';
import axios from './../../utils/Axios';


class Index extends Component {

  state = {
    html: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.ajax({
      url: `/article/${id}`,
      method: "GET"
    }, this).then(res => {

      window.document.getElementById('content').innerHTML = res.data.content;
      this.setState({
        html: res.data.content,
        title: res.data.title
      })
    })

  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="container">
        <h2>{this.state.title}</h2>

        <Link to={"/richtext/" + id}><Icon type="edit" />编辑</Link>

        <div id="content">
        </div>
      </div>
    );
  }
}
export default Index;