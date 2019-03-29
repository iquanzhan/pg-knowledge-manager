import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Form, Input, Button, message } from 'antd'
import Home from './../index';

import axios from './../../utils/Axios';

const FormItem = Form.Item;


class FormDemo extends React.Component {

    state = {
        loading: false
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        if (id) {
            axios.ajax({
                url: `/article/${id}`,
                method: "GET"
            }, this).then(res => {

                this.props.form.setFieldsValue({
                    title: res.data.title,
                    content: BraftEditor.createEditorState(res.data.content)
                })
            })
        }
    }


    handleSubmit = (event) => {

        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    title: values.title,
                    content: values.content.toHTML() // or values.content.toHTML()
                }
                //保存
                this.submitForm(submitData);
            }
        })
    }

    // 提交表单
    submitForm = (data) => {

        const { id } = this.props.match.params;
        if (id) {

            //更新
            axios.ajax({
                url: `/article/${id}`,
                method: "PUT",
                data: data
            }, this).then(res => {
                message.success("修改成功");
                window.history.go(-1);
            })
        }
        else {
            axios.ajax({
                url: '/article',
                method: "POST",
                data: data
            }, this).then(res => {
                message.success("添加成功");
                this.props.form.setFieldsValue({
                    title: '',
                    content: BraftEditor.createEditorState(null)
                })
                window.history.go(-1);
            })
        }
    }

    buildPreviewHtml() {

        return `
          <!Doctype html>
          <html>
            <head>
              <title>Preview Content</title>
              <style>
                html,body{
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  overflow: auto;
                  background-color: #f1f2f3;
                }
                .container{
                  box-sizing: border-box;
                  width: 1000px;
                  max-width: 100%;
                  min-height: 100%;
                  margin: 0 auto;
                  padding: 30px 20px;
                  overflow: hidden;
                  background-color: #fff;
                  border-right: solid 1px #eee;
                  border-left: solid 1px #eee;
                }
                .container img,
                .container audio,
                .container video{
                  max-width: 100%;
                  height: auto;
                }
                .container p{
                  white-space: pre-wrap;
                  min-height: 1em;
                }
                .container pre{
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-radius: 5px;
                }
                .container blockquote{
                  margin: 0;
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-left: 3px solid #d1d1d1;
                }
              </style>
            </head>
            <body>
              <div class="container">${this.state.editorState.toHTML()}</div>
            </body>
          </html>
        `

    }

    handleChange = (editorState) => {
        this.setState({ editorState })
    }

    //预览
    preview = () => {
        if (window.previewWindow) {
            window.previewWindow.close()
        }
        window.previewWindow = window.open();
        window.previewWindow.document.write(this.buildPreviewHtml());
        window.previewWindow.document.close();
    }


    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 22 },
            },
        };
        const extendControls = [
            {
                key: 'custom-button',
                type: 'button',
                text: '预览',
                onClick: this.preview
            }
        ]


        return (
            <Home>
                <Form style={{ paddingTop: 40, width: '90%' }} onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="文章标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题',
                            }],
                        })(
                            <Input size="large" placeholder="请输入标题" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="文章正文">
                        {getFieldDecorator('content', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                required: true,
                                validator: (_, value, callback) => {
                                    if (value.isEmpty()) {
                                        callback('请输入正文内容')
                                    } else {
                                        callback()
                                    }
                                }
                            }],
                        })(
                            <BraftEditor
                                style={{ border: '1px solid #D1D1D1' }}
                                placeholder="请输入正文内容"
                                extendControls={extendControls}
                                contentStyle={{ height: 350 }}
                                onChange={this.handleChange}
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="&nbsp;">
                        <Button loading={this.state.loading} size="large" type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </Home>
        )

    }

}

export default Form.create()(FormDemo)