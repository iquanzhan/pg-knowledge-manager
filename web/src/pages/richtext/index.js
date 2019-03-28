import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item;
class FormDemo extends React.Component {
    handleSubmit = (event) => {

        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    title: values.title,
                    content: values.content.toHTML() // or values.content.toHTML()
                }

                console.log(submitData)
            }
        })
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

        return (
            <div style={{ paddingTop: 40,width:'90%' }}>
                <Form onSubmit={this.handleSubmit}>
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
                                style={{ height: 450,border:'1px solid #D1D1D1' }}
                                placeholder="请输入正文内容"
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="&nbsp;">
                        <Button size="large" type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </div>
        )

    }

}

export default Form.create()(FormDemo)