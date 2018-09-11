import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Button } from 'antd';
import { DoublePwd, Email, MobilePhone, UserId } from 'react-admin-components';
import { getFormButtonLayout } from '@/utils/layout';

class Step1 extends PureComponent {
  handleNextClick = e => {
    e.preventDefault();
    const { form, dispatch, routeid, stepForm } = this.props;
    const { formValues } = stepForm[routeid];
    form.validateFields((err, values) => {
      if (err) return;
      dispatch({
        type: 'step-form/saveFormValues',
        routeid,
        payload: { formValues: { ...formValues, ...values } },
      });
      dispatch(routerRedux.push('/form/step-form/step2'));
    });
  };

  render() {
    const { form, routeid, stepForm } = this.props;
    const { formValues } = stepForm[routeid];

    return (
      <Form onSubmit={this.handleNextClick}>
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
        <Form.Item {...getFormButtonLayout(1)} style={{ marginTop: 32 }}>
          <Button type="primary" htmlType="submit">
            下一步
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    stepForm: state['step-form'],
  };
}

export default connect(mapStateToProps)(Form.create()(Step1));
