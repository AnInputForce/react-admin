import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Icon } from 'antd';
import { Result, DescriptionList } from 'ant-design-pro';
import { isRespSucc, createErrExtra } from '@/utils/utils';

const { Description } = DescriptionList;

class AdvancedProfileOutput extends PureComponent {
  render() {
    const { dispatch, routeid, advancedProfile, approval } = this.props;
    const { response } = advancedProfile[routeid];
    const goBackRoute = approval == null ? null : approval.goBackRoute;
    if (isRespSucc(response)) {
      const respData = response.data;
      const description = '流程审批成功';
      const extra = (
        <div>
          <DescriptionList size="large" title="流程信息" style={{ marginBottom: 16 }}>
            <Description term="流程编号">{respData.approvalNo}</Description>
          </DescriptionList>
          {goBackRoute == null ? null : (
            <div>
              <Icon style={{ color: '#00A0E9', marginRight: 8 }} type="question-circle-o" />继续审批
              <a
                style={{ marginLeft: 16 }}
                onClick={() => {
                  dispatch(routerRedux.push(goBackRoute));
                }}
              >
                立即前往 <Icon type="right" />
              </a>
            </div>
          )}
        </div>
      );
      const actions = (
        <div>
          <Button type="primary">打印</Button>
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
    }
    const extra = createErrExtra(response);
    const actions = (
      <div>
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
    return <Result type="error" title="提交失败" extra={extra} actions={actions} />;
  }
}

function mapStateToProps(state) {
  return {
    advancedProfile: state['advanced-profile'],
  };
}

export default connect(mapStateToProps)(AdvancedProfileOutput);
