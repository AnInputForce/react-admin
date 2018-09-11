import React, { Component } from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import { Login } from 'ant-design-pro';
import styles from './index.less';

const { Tab, UserName, Password, Submit } = Login;

class LoginPage extends Component {
  state = {
    type: 'account',
  };

  onTabChange = type => {
    this.setState({ type });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <Tab key="account" tab="账户密码登录">
            { login.code !== 'OK' &&
              login.type === 'account' &&
              !login.submitting &&
              this.renderMessage(`${login.message}`)}
            <UserName name="userName" placeholder="admin / guest" />
            <Password
              name="password"
              placeholder="123456 / 654321"
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
          </Tab>
          <div>
            <a style={{ float: 'right' }} href="">
            忘记密码
            </a>
          </div>
          <Submit className={styles.submit} loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    submitting: state.loading.effects['login/login'],
  };
}

export default connect(mapStateToProps)(LoginPage);
