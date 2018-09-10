import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card } from 'antd';
import BasicOneInput from './input';
import BasicOneOutput from './output';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

class BasicOne extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'basic-one/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'basic-one/clearState',
    });
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/basic-form/basic-one';
    return (
      <PageHeaderWrapper>
        <Card title="基础表单一" bordered={false}>
          <Switch>
            <Route path={`${rootPath}/input`} render={() => <BasicOneInput routeid={routeid} />} />
            <Route
              path={`${rootPath}/output`}
              render={() => <BasicOneOutput routeid={routeid} />}
            />
            <Redirect exact from={rootPath} to={`${rootPath}/input`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(BasicOne);
