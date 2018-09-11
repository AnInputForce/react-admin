import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button } from 'antd';
import { Result, DescriptionList } from 'ant-design-pro';
import { isRespSucc, createErrExtra } from '@/utils/utils';
import { parseAmtUppercase } from '@/utils/parse';

const { Description } = DescriptionList;

class AdvancedFormOutput extends PureComponent {
  parsePaymentConditions = paymentConditions => {
    if (paymentConditions === '1') {
      return '1-密码支付';
    } else if (paymentConditions === '2') {
      return '2-手机支付';
    } else if (paymentConditions === '3') {
      return '3-证件支付';
    }
  };

  parseCardType = cardType => {
    if (cardType === '1') {
      return '1-身份证';
    } else {
      return '2-护照';
    }
  };

  parseAccountType = accountType => {
    if (accountType === '1') {
      return '账号组一';
    } else {
      return '账号组二';
    }
  };
  
  renderPaymentDetail = (respData) => {
    if (respData.paymentConditions === '2') {
      return (
        <Description term="手机号码">{respData.phone}</Description>
      );
    } else if (respData.paymentConditions === '3') {
      return (
        <div>
          <Description term="证件类型">{this.parseCardType(respData.cardType)}</Description>
          {respData.cardType === '1' ? (
            <Description term="身份证">{respData.idCard}</Description>
          ) : (
            <Description term="护照">{respData.passport}</Description>
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { dispatch, routeid, advancedForm } = this.props;
    const { response } = advancedForm[routeid];
    if (isRespSucc(response)) {
      const respData = response.data;
      const description = 'XXX交易成功';
      const extra = (
        <DescriptionList size="large" title="XXX信息">
          <Description term="用户名">{respData.username}</Description>
          <Description term="账户名">{respData.accountName}</Description>
          <Description term="金额">{parseAmtUppercase(respData.amt)}</Description>
          <Description term="支付条件">
            {this.parsePaymentConditions(respData.paymentConditions)}
          </Description>
          {this.renderPaymentDetail(respData)}
          <Description term="账号组">{this.parseAccountType(respData.accountType)}</Description>
          <Description term="付款账号一">
            {respData.payAccount1 == null ? '无' : respData.payAccount1}
          </Description>
          <Description term="收款账号一">
            {respData.recvAccount1 == null ? '无' : respData.recvAccount1}
          </Description>
          <Description term="付款账号二">{respData.payAccount2}</Description>
          <Description term="收款账号二">{respData.recvAccount2}</Description>
          <Description term="备注">{respData.remark}</Description>
        </DescriptionList>
      );
      const actions = (
        <div>
          <Button type="primary">打印</Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch({ type: 'advanced-form/redo', routeid });
            }}
          >
            再做一笔
          </Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch(routerRedux.push('/'));
            }}
          >
            返回主页
          </Button>
        </div>
      );
      return (
        <Result
          type="success"
          title="提交成功"
          description={description}
          extra={extra}
          actions={actions}
        />
      );
    } else {
      const extra = createErrExtra(response);
      const actions = (
        <div>
          <Button
            type="primary"
            onClick={() => {
              dispatch({ type: 'advanced-form/back2edit' });
            }}
          >
            返回修改
          </Button>
        </div>
      );
      return <Result type="error" title="提交失败" extra={extra} actions={actions} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    advancedForm: state['advanced-form'],
  };
}

export default connect(mapStateToProps)(AdvancedFormOutput);
