import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import AdvancedFormInput from './input';
import AdvancedFormOutput from './output';
import NotFound from '@/pages/Exception/404';
import { createRouteid } from '@/utils/utils';

class AdvancedForm extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'advanced-form/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'advanced-form/clearState',
    });
  }

  render() {
    const { routeid } = this.state;
    const rootPath = '/form/advanced-form';
    return (
      <PageHeaderWrapper>
        <Card title="高级表单" bordered={false}>
          <Switch>
            <Route
              path={`${rootPath}/input`}
              render={() => <AdvancedFormInput routeid={routeid} />}
            />
            <Route
              path={`${rootPath}/output`}
              render={() => <AdvancedFormOutput routeid={routeid} />}
            />
            <Redirect exact from={rootPath} to={`${rootPath}/input`} />
            <Route component={NotFound} />
          </Switch>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(AdvancedForm);
