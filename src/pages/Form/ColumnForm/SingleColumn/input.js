import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Input, DatePicker, Spin, Cascader, Radio, Button } from 'antd';
import { AmtInput, DoublePwd, Email, MobilePhone, Name, Sex, UserId } from 'react-admin-components';
import { getFormItemLayout, getFormButtonLayout } from '@/utils/layout';
import { parseMomentObject } from '@/utils/parse';

const { TextArea } = Input;
const RadioGroup = Radio.Group;

const C1Layout = getFormItemLayout(1);
class SingleColumnInput extends PureComponent {
  componentWillMount() {
    const { dispatch, routeid } = this.props;
    dispatch({
      type: 'single-column/init',
      routeid,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch, routeid } = this.props;
    form.validateFields((err, values) => {
      if (err) return;
      const parseBirthday = parseMomentObject(values.birthday, 'MM-DD-YYYY');
      dispatch({
        type: 'single-column/submit',
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
    const { form, routeid, singleColumn, initLoading, submitLoading } = this.props;
    const { formValues, cityValues } = singleColumn[routeid];
    const { getFieldDecorator } = form;

    return (
      <Spin spinning={submitLoading == null ? false : submitLoading}>
        <Form onSubmit={this.handleSubmit} style={{ marginTop: 8 }}>
          <UserId
            form={form}
            required
            hasFeedback
            label="用户名"
            field="username"
            initialValue={formValues.username}
          />
          <DoublePwd
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
            form={form}
            required
            hasFeedback
            label="手机号码"
            field="phone"
            initialValue={formValues.phone}
          />
          <Email
            form={form}
            required
            hasFeedback
            label="邮箱地址"
            field="email"
            initialValue={formValues.email}
          />
          <Name
            form={form}
            required
            hasFeedback
            label="姓名"
            field="actualName"
            initialValue={formValues.actualName}
          />
          <Sex
            form={form}
            required
            label="性别"
            field="sex"
            width="60%"
            initialValue={formValues.sex}
          />
          <Form.Item {...C1Layout} label="出生日期">
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
            <Form.Item {...C1Layout} label="所属城市">
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
          <AmtInput
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
          <Form.Item {...C1Layout} label="备注">
            {getFieldDecorator('remark', {
              initialValue: formValues.remark,
            })(<TextArea style={{ minHeight: 32 }} placeholder="请输入备注信息" rows={4} />)}
          </Form.Item>
          <Form.Item {...C1Layout} label="提交结果">
            {getFieldDecorator('submitTestResult', {
              initialValue: formValues.submitTestResult,
            })(
              <RadioGroup>
                <Radio value={0}>成功</Radio>
                <Radio value={1}>失败</Radio>
              </RadioGroup>
            )}
          </Form.Item>
          <Form.Item {...getFormButtonLayout(1)} style={{ marginTop: 32 }}>
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
    singleColumn: state['single-column'],
    initLoading: state.loading.effects['single-column/init'],
    submitLoading: state.loading.effects['single-column/submit'],
  };
}

export default connect(mapStateToProps)(Form.create()(SingleColumnInput));
