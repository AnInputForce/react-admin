import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Row, Col, Input, Select, Spin, Radio, Button } from 'antd';
import { parseMomentObject } from '@/utils/parse';

const { TextArea } = Input;
const SelectOption = Select.Option;
const RadioGroup = Radio.Group;

const C3I0Layout = {
  xl: { span: 6, offset: 0 },
  lg: 8,
  md: 8,
  sm: 24,
};

const C3I1Layout = {
  xl: { span: 6, offset: 2 },
  lg: 8,
  md: 8,
  sm: 24,
};

const C3I2Layout = {
  xl: { span: 6, offset: 2 },
  lg: 8,
  md: 8,
  sm: 24,
};

const C3I0E3Layout = {
  xl: 22,
  lg: 24,
  md: 24,
  sm: 24,
};

const submitFormLayout = {
  xl: 22,
  lg: 24,
};

const submitFormStyle = {
  textAlign: 'right',
  marginTop: 16,
};

class AdvancedFormInput extends PureComponent {
  state = {
    accountGroupDisable: false,
  };

  componentWillMount() {
    const { dispatch, routeid, advancedForm } = this.props;
    const { formValues } = advancedForm[routeid];
    if (formValues.accountType === '1') {
      this.setState({
        accountGroupDisable: false,
      });
    } else {
      this.setState({
        accountGroupDisable: true,
      });
    }

    dispatch({
      type: 'advanced-form/init',
      routeid,
    });
  }

  handleUserNameBlur = () => {
    const { dispatch, routeid, form } = this.props;
    const { getFieldValue, setFieldsValue } = form;
    const username = getFieldValue('username');
    if (username == null) {
      return;
    }
    dispatch({
      type: 'advanced-form/getAccountName',
      routeid,
      payload: {
        username,
      },
    }).then(data => {
      if (data == null) {
        return;
      }
      setFieldsValue({
        accountName: data.accountName,
      });
    });
  };

  handlePaymentChange = () => {
    const { form: { setFieldsValue } } = this.props;
    setFieldsValue({
      password: null,
      phone: null,
      cardType: null,
    });
  };

  handleCardTypeChange = () => {
    const { form: { setFieldsValue } } = this.props;
    setFieldsValue({
      idCard: null,
      passport: null,
    });
  };

  handleAccountTypeChange = e => {
    const { form: { setFieldsValue } } = this.props;
    setFieldsValue({
      payAccount1: null,
      payAccount2: null,
      recvAccount1: null,
      recvAccount2: null,
    });
    if (e.target.value === '1') {
      this.setState({
        accountGroupDisable: false,
      });
    } else {
      this.setState({
        accountGroupDisable: true,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch, routeid } = this.props;
    form.validateFields((err, values) => {
      if (err) return;
      const parseBirthday = parseMomentObject(values.birthday, 'MM-DD-YYYY');
      dispatch({
        type: 'advanced-form/submit',
        routeid,
        payload: { formValues: { ...values, parseBirthday } },
      });
    });
  };

  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/'));
  };

  render() {
    const { form, routeid, advancedForm, submitLoading, getAccountNameLoading } = this.props;
    const { accountGroupDisable } = this.state;
    const { formValues } = advancedForm[routeid];
    const { getFieldDecorator, getFieldValue } = form;
    return (
      <Spin spinning={submitLoading == null ? false : submitLoading}>
        <Form onSubmit={this.handleSubmit} layout="vertical">
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item hasFeedback label="用户名">
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
                })(<Input placeholder="请输入6~18位用户名" onBlur={this.handleUserNameBlur} />)}
              </Form.Item>
            </Col>
            <Col {...C3I1Layout}>
              <Spin spinning={getAccountNameLoading == null ? false : getAccountNameLoading}>
                <Form.Item hasFeedback label="账户名">
                  {getFieldDecorator('accountName', {
                    initialValue: formValues.accountName,
                    validateFirst: true,
                    rules: [{ required: true, message: '请输入金额' }],
                  })(<Input disabled />)}
                </Form.Item>
              </Spin>
            </Col>
            <Col {...C3I2Layout}>
              <Form.Item hasFeedback label="金额">
                {getFieldDecorator('amt', {
                  initialValue: formValues.amt,
                  validateFirst: true,
                  rules: [{ required: true, message: '请输入金额' }],
                })(<Input prefix="￥" placeholder="请输入金额" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item label="支付条件">
                {getFieldDecorator('paymentConditions', {
                  initialValue: formValues.paymentConditions,
                  validateFirst: true,
                  rules: [
                    {
                      required: true,
                      message: '请选择支付条件',
                    },
                  ],
                })(
                  <Select
                    showSearch
                    placeholder="请选择支付条件"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={this.handlePaymentChange}
                  >
                    <SelectOption value="1">1-密码支付</SelectOption>
                    <SelectOption value="2">2-手机支付</SelectOption>
                    <SelectOption value="3">3-证件支付</SelectOption>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item hasFeedback label="密码">
                {getFieldDecorator('password', {
                  initialValue: formValues.password,
                  validateFirst: true,
                  rules: [
                    { required: getFieldValue('paymentConditions') === '1', message: '请输入密码' },
                    { pattern: /^[A-Za-z0-9_]+$/, message: '密码仅可使用字母和数字字符' },
                    { min: 6, message: '密码最小长度为6位字符' },
                    { max: 16, message: '密码最大长度为16位字符' },
                  ],
                })(
                  <Input
                    type="password"
                    disabled={getFieldValue('paymentConditions') !== '1'}
                    placeholder="请输入6~16位密码"
                  />
                )}
              </Form.Item>
            </Col>
            <Col {...C3I1Layout}>
              <Form.Item hasFeedback label="手机号码">
                {getFieldDecorator('phone', {
                  initialValue: formValues.phone,
                  validateFirst: true,
                  rules: [
                    {
                      required: getFieldValue('paymentConditions') === '2',
                      message: '请输入手机号码',
                    },
                    {
                      pattern: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
                      message: '请输入合法的手机号码',
                    },
                  ],
                })(
                  <Input
                    disabled={getFieldValue('paymentConditions') !== '2'}
                    placeholder="请输入手机号码"
                  />
                )}
              </Form.Item>
            </Col>
            <Col {...C3I2Layout}>
              <Form.Item label="证件类型">
                {getFieldDecorator('cardType', {
                  initialValue: formValues.cardType,
                  validateFirst: true,
                  rules: [
                    {
                      required: getFieldValue('paymentConditions') === '3',
                      message: '请选择证件条件',
                    },
                  ],
                })(
                  <Select
                    showSearch
                    disabled={getFieldValue('paymentConditions') !== '3'}
                    placeholder="请选择证件类型"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={this.handleCardTypeChange}
                  >
                    <SelectOption value="1">1-身份证</SelectOption>
                    <SelectOption value="2">2-护照</SelectOption>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item hasFeedback label="身份证">
                {getFieldDecorator('idCard', {
                  initialValue: formValues.idCard,
                  validateFirst: true,
                  rules: [
                    {
                      required:
                        getFieldValue('paymentConditions') === '3' &&
                        getFieldValue('cardType') === '1',
                      message: '请输入身份证号码',
                    },
                    {
                      pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                      message: '请输入合法的身份证号码',
                    },
                  ],
                })(
                  <Input
                    disabled={
                      !(
                        getFieldValue('paymentConditions') === '3' &&
                        getFieldValue('cardType') === '1'
                      )
                    }
                    placeholder="请输入身份证号码"
                  />
                )}
              </Form.Item>
            </Col>
            <Col {...C3I1Layout}>
              <Form.Item hasFeedback label="护照">
                {getFieldDecorator('passport', {
                  initialValue: formValues.passport,
                  validateFirst: true,
                  rules: [
                    {
                      required:
                        getFieldValue('paymentConditions') === '3' &&
                        getFieldValue('cardType') === '2',
                      message: '请输入护照编号',
                    },
                  ],
                })(
                  <Input
                    disabled={
                      !(
                        getFieldValue('paymentConditions') === '3' &&
                        getFieldValue('cardType') === '2'
                      )
                    }
                    placeholder="请输入护照编号"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Form.Item label="账号组">
              {getFieldDecorator('accountType', {
                required: true,
                initialValue: formValues.accountType,
              })(
                <RadioGroup onChange={this.handleAccountTypeChange}>
                  <Radio value="1">账号组一</Radio>
                  <Radio value="2">账号组二</Radio>
                </RadioGroup>
              )}
            </Form.Item>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item hasFeedback label="付款账号一">
                {getFieldDecorator('payAccount1', {
                  initialValue: formValues.payAccount1,
                  validateFirst: true,
                  rules: [{ required: !accountGroupDisable, message: '请输入付款账号一' }],
                })(<Input disabled={accountGroupDisable} placeholder="请输入付款账号一" />)}
              </Form.Item>
            </Col>
            <Col {...C3I1Layout}>
              <Form.Item hasFeedback label="付款账号二">
                {getFieldDecorator('payAccount2', {
                  initialValue: formValues.payAccount2,
                  validateFirst: true,
                  rules: [{ required: accountGroupDisable, message: '请输入付款账号二' }],
                })(<Input disabled={!accountGroupDisable} placeholder="请输入付款账号二" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item hasFeedback label="收款账号一">
                {getFieldDecorator('recvAccount1', {
                  initialValue: formValues.recvAccount1,
                  validateFirst: true,
                  rules: [{ required: !accountGroupDisable, message: '请输入收款账号一' }],
                })(<Input disabled={accountGroupDisable} placeholder="请输入收款账号一" />)}
              </Form.Item>
            </Col>
            <Col {...C3I1Layout}>
              <Form.Item hasFeedback label="收款账号二">
                {getFieldDecorator('recvAccount2', {
                  initialValue: formValues.recvAccount2,
                  validateFirst: true,
                  rules: [{ required: accountGroupDisable, message: '请输入收款账号二' }],
                })(<Input disabled={!accountGroupDisable} placeholder="请输入收款账号二" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0E3Layout}>
              <Form.Item label="备注">
                {getFieldDecorator('remark', {
                  initialValue: formValues.remark,
                })(<TextArea style={{ minHeight: 32 }} placeholder="请输入备注信息" rows={4} />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...C3I0Layout}>
              <Form.Item label="提交结果">
                {getFieldDecorator('submitTestResult', {
                  initialValue: formValues.submitTestResult,
                })(
                  <RadioGroup>
                    <Radio value={0}>成功</Radio>
                    <Radio value={1}>失败</Radio>
                  </RadioGroup>
                )}
              </Form.Item>
            </Col>
            <Col {...submitFormLayout} style={submitFormStyle}>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={submitLoading}>
                  提交
                </Button>
                <Button style={{ marginLeft: 16 }} onClick={this.handleClose}>
                  关闭
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  return {
    advancedForm: state['advanced-form'],
    initLoading: state.loading.effects['advanced-form/init'],
    getAccountNameLoading: state.loading.effects['advanced-form/getAccountName'],
    submitLoading: state.loading.effects['advanced-form/submit'],
  };
}

export default connect(mapStateToProps)(Form.create()(AdvancedFormInput));
