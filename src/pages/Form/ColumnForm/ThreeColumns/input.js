import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Row, Col, Input, DatePicker, Spin, Radio, Button } from 'antd';
import {
  AmtInput,
  City,
  DoublePwd,
  Email,
  MobilePhone,
  Name,
  Sex,
  UserId,
} from 'react-admin-components';
import { getFormItemLayout, getFormButtonLayout } from '@/utils/layout';
import { parseMomentObject } from '@/utils/parse';

const { TextArea } = Input;
const RadioGroup = Radio.Group;

const C3I0Layout = getFormItemLayout(3, 0);
const C3I1Layout = getFormItemLayout(3, 1);
const C3I1E2Layout = getFormItemLayout(3, 1, 2);

class ThreeColumnsInput extends PureComponent {
  handleGetCityValues = cityValues => {
    const { dispatch, routeid } = this.props;
    dispatch({
      type: 'three-columns/setCityValues',
      routeid,
      payload: {
        cityValues,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch, routeid } = this.props;
    form.validateFields((err, values) => {
      console.log('values:', values);
      if (err) return;
      const parseBirthday = parseMomentObject(values.birthday, 'MM-DD-YYYY');
      dispatch({
        type: 'three-columns/submit',
        routeid,
        payload: {
          formValues: {
            ...values,
            parseBirthday,
          },
        },
      });
    });
  };

  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/'));
  };

  render() {
    const { form, routeid, threeColumns, submitLoading } = this.props;
    const { formValues, cityValues } = threeColumns[routeid];
    const { getFieldDecorator } = form;

    return (
      <Spin spinning={submitLoading == null ? false : submitLoading}>
        <Form onSubmit={this.handleSubmit} layout="vertical">
          <Row gutter={16}>
            <UserId
              columnLayout={3}
              columnIndex={0}
              form={form}
              required
              hasFeedback
              label="用户名"
              field="username"
              initialValue={formValues.username}
            />
            <DoublePwd
              columnLayout={3}
              columnIndex={1}
              form={form}
              required
              hasFeedback
              pwdLabel="密码"
              pwdField="password"
              confirmLabel="确认密码"
              confirmField="confirmPassword"
              min={3}
              max={10}
              pwdInitialValue={formValues.password}
              confirmInitialValue={formValues.confirmPassword}
            />
            <MobilePhone
              columnLayout={3}
              columnIndex={0}
              form={form}
              required
              hasFeedback
              label="手机号码"
              field="phone"
              initialValue={formValues.phone}
            />
            <Email
              columnLayout={3}
              columnIndex={1}
              form={form}
              required
              hasFeedback
              label="邮箱地址"
              field="email"
              initialValue={formValues.email}
            />
            <Name
              columnLayout={3}
              columnIndex={2}
              form={form}
              required
              hasFeedback
              label="姓名"
              field="actualName"
              initialValue={formValues.actualName}
            />
            <Sex
              columnLayout={3}
              columnIndex={0}
              form={form}
              required
              label="性别"
              field="sex"
              initialValue={formValues.sex}
            />
            <Col {...C3I1Layout}>
              <Form.Item label="出生日期">
                {getFieldDecorator('birthday', {
                  initialValue: formValues.birthday,
                  validateFirst: true,
                  rules: [
                    {
                      required: true,
                      message: '请选择出生日期',
                    },
                  ],
                })(<DatePicker style={{ width: '100%' }} />)}
              </Form.Item>
            </Col>
            <City
              columnLayout={3}
              columnIndex={2}
              form={form}
              required
              label="城市"
              field="city"
              cityValues={cityValues}
              onGetCityValues={this.handleGetCityValues}
              initialValue={formValues.city}
            />
            <AmtInput
              columnLayout={3}
              columnIndex={0}
              form={form}
              required={false}
              hasFeedback
              label="每月收入"
              field="income"
              min={500}
              max={50000}
              decimal={1}
              initialValue={formValues.income}
            />
            <Col {...C3I1E2Layout}>
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
            <Col {...getFormButtonLayout(2)} style={{ textAlign: 'right', marginTop: 32 }}>
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
    threeColumns: state['three-columns'],
    submitLoading: state.loading.effects['three-columns/submit'],
  };
}

export default connect(mapStateToProps)(Form.create()(ThreeColumnsInput));
