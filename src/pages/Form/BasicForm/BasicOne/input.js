import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Input, Select, DatePicker, Spin, Cascader, Radio, Button } from 'antd';
import { parseMomentObject } from '@/utils/parse';

const { TextArea } = Input;
const SelectOption = Select.Option;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};

class BasicOneInput extends PureComponent {
  componentWillMount() {
    const { dispatch, routeid } = this.props;
    dispatch({
      type: 'basic-one/init',
      routeid,
    });
  }

  handlePasswordChange = () => {
    const { form } = this.props;
    form.setFieldsValue({
      confirmPassword: undefined,
    });
  };

  handleConfirmPassword = (rule, value, callback) => {
    const { form: { getFieldValue } } = this.props;
    if (value && value !== getFieldValue('password')) {
      callback('两次密码输入不一致！');
    }
    callback();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch, routeid } = this.props;
    form.validateFields((err, values) => {
      if (err) return;
      const parseBirthday = parseMomentObject(values.birthday, 'MM-DD-YYYY');
      dispatch({
        type: 'basic-one/submit',
        routeid,
        payload: {
          formValues: { ...values, parseBirthday },
        },
      });
    });
  };

  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/'));
  };

  render() {
    const { form, routeid, basicOne, initLoading, submitLoading } = this.props;
    const { formValues, cityValues } = basicOne[routeid];
    const { getFieldDecorator } = form;

    return (
      <Spin spinning={submitLoading == null ? false : submitLoading}>
        <Form onSubmit={this.handleSubmit} style={{ marginTop: 8 }}>
          <Form.Item {...formItemLayout} hasFeedback label="用户名">
            {getFieldDecorator('username', {
              initialValue: formValues.username,
              validateFirst: true,
              rules: [
                { required: true, message: '请输入用户名' },
                {
                  pattern: /^[A-Za-z][A-Za-z0-9_]+$/,
                  message: '用户名仅可使用字母、数字、下划线，需以字母开头',
                },
                { min: 6, message: '用户名最小长度为6位字符' },
                { max: 18, message: '用户名最大长度为18位字符' },
              ],
            })(<Input placeholder="请输入6~18位用户名" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} hasFeedback label="密码">
            {getFieldDecorator('password', {
              initialValue: formValues.password,
              validateFirst: true,
              rules: [
                { required: true, message: '请输入密码' },
                { pattern: /^[A-Za-z0-9]+$/, message: '密码仅可使用字母和数字字符' },
                { min: 6, message: '密码最小长度为6位字符' },
                { max: 16, message: '密码最大长度为16位字符' },
              ],
            })(
              <Input
                type="password"
                placeholder="请输入6~16位密码"
                onChange={this.handlePasswordChange}
              />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} hasFeedback label="确认密码">
            {getFieldDecorator('confirmPassword', {
              initialValue: formValues.confirmPassword,
              validateFirst: true,
              rules: [
                { required: true, message: '请输入确认密码' },
                { pattern: /^[A-Za-z0-9]+$/, message: '确认密码仅可使用字母和数字字符' },
                { min: 6, message: '确认密码最小长度为6位字符' },
                { max: 16, message: '确认密码最大长度为16位字符' },
                { validator: this.handleConfirmPassword },
              ],
            })(<Input type="password" placeholder="请输入6~16位确认密码" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} hasFeedback label="手机号码">
            {getFieldDecorator('phone', {
              initialValue: formValues.phone,
              validateFirst: true,
              rules: [
                { required: true, message: '请输入手机号码' },
                {
                  pattern: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
                  message: '请输入合法的手机号码',
                },
              ],
            })(<Input placeholder="请输入手机号码" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} hasFeedback label="邮箱地址">
            {getFieldDecorator('email', {
              initialValue: formValues.email,
              validateFirst: true,
              rules: [
                { required: true, message: '请输入邮箱地址' },
                { type: 'email', message: '请输入合法的邮箱地址' },
              ],
            })(<Input placeholder="请输入邮箱地址" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} hasFeedback label="姓名">
            {getFieldDecorator('actualName', {
              initialValue: formValues.actualName,
              validateFirst: true,
              rules: [
                { required: true, message: '请输入姓名' },
                {
                  pattern: /^([a-zA-Z0-9\u4e00-\u9fa5])+$/,
                  message: '姓名仅可使用字母、数字和汉字字符',
                },
                { min: 2, message: '姓名最小长度为2位字符' },
                { max: 10, message: '姓名最大长度为10位字符' },
              ],
            })(<Input placeholder="请输入2~10位姓名" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="性别">
            {getFieldDecorator('sex', {
              initialValue: formValues.sex,
              validateFirst: true,
              rules: [
                {
                  required: true,
                  message: '请选择性别',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: '60%' }}
                placeholder="请选择性别"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <SelectOption value="1">男</SelectOption>
                <SelectOption value="2">女</SelectOption>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="出生日期">
            {getFieldDecorator('birthday', {
              initialValue: formValues.birthday,
              validateFirst: true,
              rules: [
                {
                  required: true,
                  message: '请选择出生日期',
                },
              ],
            })(<DatePicker style={{ width: '60%' }} />)}
          </Form.Item>
          <Spin spinning={initLoading == null ? false : initLoading}>
            <Form.Item {...formItemLayout} label="所属城市">
              {getFieldDecorator('city', {
                initialValue: formValues.city,
                validateFirst: true,
                rules: [
                  {
                    type: 'array',
                    required: true,
                    message: '请选择所属城市',
                  },
                ],
              })(
                <Cascader
                  showSearch
                  style={{ width: '60%' }}
                  options={cityValues}
                  placeholder="请选择所属城市"
                />
              )}
            </Form.Item>
          </Spin>
          <Form.Item {...formItemLayout} hasFeedback label="每月收入">
            {getFieldDecorator('income', {
              initialValue: formValues.income,
              validateFirst: true,
              rules: [{ required: true, message: '请输入每月收入' }],
            })(<Input prefix="￥" placeholder="请输入每月收入" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="备注">
            {getFieldDecorator('remark', {
              initialValue: formValues.remark,
            })(<TextArea style={{ minHeight: 32 }} placeholder="请输入备注信息" rows={4} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="提交结果">
            {getFieldDecorator('submitTestResult', {
              initialValue: formValues.submitTestResult,
            })(
              <RadioGroup>
                <Radio value={0}>成功</Radio>
                <Radio value={1}>失败</Radio>
              </RadioGroup>
            )}
          </Form.Item>
          <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitLoading}>
              提交
            </Button>
            <Button style={{ marginLeft: 16 }} onClick={this.handleClose}>
              关闭
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  return {
    basicOne: state['basic-one'],
    initLoading: state.loading.effects['basic-one/init'],
    submitLoading: state.loading.effects['basic-one/submit'],
  };
}

export default connect(mapStateToProps)(Form.create()(BasicOneInput));
