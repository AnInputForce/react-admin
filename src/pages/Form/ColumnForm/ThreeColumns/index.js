import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card } from 'antd';
import ThreeColumnsInput from './input';
import ThreeColumnsOutput from './output';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

class ThreeColumns extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'three-columns/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'three-columns/clearState',
    });
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/column-form/three-columns';
    return (
      <PageHeaderWrapper>
        <Card title="三列表单" bordered={false}>
          <Switch>
            <Route
              path={`${rootPath}/input`}
              render={() => <ThreeColumnsInput routeid={routeid} />}
            />
            <Route
              path={`${rootPath}/output`}
              render={() => <ThreeColumnsOutput routeid={routeid} />}
            />
            <Redirect exact from={rootPath} to={`${rootPath}/input`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(ThreeColumns);
