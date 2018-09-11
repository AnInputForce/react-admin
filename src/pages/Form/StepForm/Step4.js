import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Button, Spin } from 'antd';
import { DescriptionList } from 'ant-design-pro';
import { getDescButtonLayout } from '@/utils/layout';
import {
  parseSexValue,
  parseMomentObject,
  parseCascaderValues,
  parseAmtUppercase,
} from '@/utils/parse';

const { Description } = DescriptionList;

class Step4 extends PureComponent {
  handlePrevClick = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/form/step-form/step3'));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, routeid, stepForm } = this.props;
    const { formValues } = stepForm[routeid];
    const parseBirthday = parseMomentObject(formValues.birthday, 'MM-DD-YYYY');
    dispatch({
      type: 'step-form/submit',
      routeid,
      payload: { formValues: { ...formValues, parseBirthday } },
    });
  };

  render() {
    const { routeid, stepForm, submitLoading } = this.props;
    const { cityValues, formValues } = stepForm[routeid];
    return (
      <Spin spinning={submitLoading == null ? false : submitLoading}>
        <Form onSubmit={this.handleSubmit}>
          <DescriptionList size="large" title="XXX信息">
            <Description term="用户名">{formValues.username}</Description>
            <Description term="手机号码">{formValues.phone}</Description>
            <Description term="邮箱地址">{formValues.email}</Description>
            <Description term="姓名">{formValues.actualName}</Description>
            <Description term="性别">{parseSexValue(formValues.sex)}</Description>
            <Description term="出生日期">
              {parseMomentObject(formValues.birthday, 'YYYY年MM月DD日')}
            </Description>
            <Description term="所属城市">
              {parseCascaderValues(cityValues, formValues.city)}
            </Description>
            <Description term="每月收入">{parseAmtUppercase(formValues.income)}</Description>
            <Description term="备注">{formValues.remark}</Description>
          </DescriptionList>
          <Form.Item {...getDescButtonLayout(3)} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitLoading}>
              提交
            </Button>
            <Button style={{ marginLeft: 16 }} onClick={this.handlePrevClick}>
              上一步
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  return {
    stepForm: state['step-form'],
    submitLoading: state.loading.effects['step-form/submit'],
  };
}

export default connect(mapStateToProps)(Form.create()(Step4));
