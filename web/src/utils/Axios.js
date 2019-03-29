import JsonP from 'jsonp';
import axios from "axios";
import { Modal } from 'antd';

const baseUrl = "http://api.chengxiaoxiao.com";

export default class {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        });
    }

    static ajax(options, that) {
        that.setState({
            loading: true
        })
        return new Promise((resolve, reject) => {

            axios({
                baseURL: baseUrl,
                timeout: 5000,
                ...options
            }).then((response) => {

                that.setState({
                    loading: false
                })
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res);
                    }
                    else {
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                }
                else {
                    reject(response.data);
                }
            })
        });

    }
}

