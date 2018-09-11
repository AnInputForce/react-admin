import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card } from 'antd';
import TwoColumnsInput from './input';
import TwoColumnsOutput from './output';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

class TwoColumns extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'two-columns/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'two-columns/clearState',
    });
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/column-form/two-columns';
    return (
      <PageHeaderWrapper>
        <Card title="两列表单" bordered={false}>
          <Switch>
            <Route
              path={`${rootPath}/input`}
              render={() => <TwoColumnsInput routeid={routeid} />}
            />
            <Route
              path={`${rootPath}/output`}
              render={() => <TwoColumnsOutput routeid={routeid} />}
            />
            <Redirect exact from={rootPath} to={`${rootPath}/input`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(TwoColumns);
