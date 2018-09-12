import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import AdvancedProfileDetail from './detail';
import AdvancedProfileOutput from './output';
import { createRouteid } from '@/utils/utils';
import NotFound from '@/pages/Exception/404';

class AdvancedProfile extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'advanced-profile/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'advanced-profile/clearState',
    });
    dispatch({
      type: 'public/deleteState',
      payload: {
        key: 'approval',
      },
    });
  }

  render() {
    const { routeid } = this.state;
    const { approval } = this.props;
    const rootPath = '/profile/advanced-profile';

    return (
      <Switch>
        <Route
          path={`${rootPath}/detail`}
          render={() => <AdvancedProfileDetail routeid={routeid} approval={approval} />}
        />
        <Route
          path={`${rootPath}/output`}
          render={() => <AdvancedProfileOutput routeid={routeid} approval={approval} />}
        />
        <Redirect exact from={rootPath} to={`${rootPath}/detail`} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    approval: state.public.approval,
  };
}

export default connect(mapStateToProps)(AdvancedProfile);
