import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card } from 'antd';
import BasicTwoInput from './input';
import BasicTwoOutput from './output';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

class BasicTwo extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'basic-two/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'basic-two/clearState',
    });
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/basic-form/basic-two';
    return (
      <PageHeaderWrapper>
        <Card title="基础表单二" bordered={false}>
          <Switch>
            <Route path={`${rootPath}/input`} render={() => <BasicTwoInput routeid={routeid} />} />
            <Route
              path={`${rootPath}/output`}
              render={() => <BasicTwoOutput routeid={routeid} />}
            />
            <Redirect exact from={rootPath} to={`${rootPath}/input`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(BasicTwo);
