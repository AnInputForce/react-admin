import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card, Steps } from 'antd';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

const { Step } = Steps;

class StepForm extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'step-form/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'step-form/clearState',
    });
  }

  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/step-form';
    return (
      <PageHeaderWrapper>
        <Card title="分步表单" bordered={false}>
          <Steps style={{ marginBottom: 32 }} current={this.getCurrentStep()}>
            <Step title="填写基本信息" />
            <Step title="填写详细信息" />
            <Step title="填写其他信息" />
            <Step title="确认输入信息" />
            <Step title="完成" />
          </Steps>
          <Switch>
            <Route path={`${rootPath}/step1`} render={() => <Step1 routeid={routeid} />} />
            <Route path={`${rootPath}/Step2`} render={() => <Step2 routeid={routeid} />} />
            <Route path={`${rootPath}/Step3`} render={() => <Step3 routeid={routeid} />} />
            <Route path={`${rootPath}/Step4`} render={() => <Step4 routeid={routeid} />} />
            <Route path={`${rootPath}/Step5`} render={() => <Step5 routeid={routeid} />} />
            <Redirect exact from={rootPath} to={`${rootPath}/step1`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(StepForm);
