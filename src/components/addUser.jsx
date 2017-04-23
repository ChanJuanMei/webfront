import React, { Component, PropTypes } from 'react';
import { Form, Select, Input, Modal } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  Ok = (e) => {
    const self = this;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        self.props.handleOk(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };
    return (
      <Modal
        title="新增用户" visible={this.props.visible}
        onOk={this.Ok} onCancel={this.props.handleCancel}
       >
        <Form>
          <FormItem
            {...formItemLayout}
            label="姓名"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: 'Please input your name!' }]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Select"
            hasFeedback
          >
            {getFieldDecorator('type', {
              rules: [
                { required: true, message: 'Please select your type!' }
              ]
            })(
              <Select placeholder="Please select a type">
                <Option value="type1">type1</Option>
                <Option value="type2">type2</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="desc"
            hasFeedback
          >
            {getFieldDecorator('desc')(
              <Input type="textarea" rows={4} />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
export default Form.create()(AddUser);
