import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card } from 'antd';
import SingleColumnInput from './input';
import SingleColumnOutput from './output';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

class SingleColumn extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'single-column/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'single-column/clearState',
    });
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/column-form/single-column';
    return (
      <PageHeaderWrapper>
        <Card title="单列表单" bordered={false}>
          <Switch>
            <Route
              path={`${rootPath}/input`}
              render={() => <SingleColumnInput routeid={routeid} />}
            />
            <Route
              path={`${rootPath}/output`}
              render={() => <SingleColumnOutput routeid={routeid} />}
            />
            <Redirect exact from={rootPath} to={`${rootPath}/input`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(SingleColumn);
