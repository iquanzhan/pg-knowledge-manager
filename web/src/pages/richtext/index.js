import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';

// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

class Index extends Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }

    componentDidMount() {

    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML();
        console.log(htmlContent);
        //const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        const { editorState } = this.state
        return (
            <div className="my-component">
                <Row>
                    <Col span={22}>
                        <Input size="large" placeholder="请输入文章标题" />
                    </Col>
                    <Col span={1}>
                        <Button style={{ marginLeft: 15 }} type="primary" size="large">发布</Button>
                    </Col>
                </Row>

                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />

            </div>
        )
    }
}

export default Index;