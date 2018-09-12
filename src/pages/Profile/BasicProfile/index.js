import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Row, Col, Button, Divider, Spin, Table } from 'antd';
import { DescriptionList } from 'ant-design-pro';
import { UserId } from 'react-admin-components';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { getFormItemLayoutWithoutOffset } from '@/utils/layout';
import { parseSexValue, parseDateTimeString, parseAmtUppercase } from '@/utils/parse';
import { createRouteid, isEmptyObject } from '@/utils/utils';
import styles from './index.less';

const { Description } = DescriptionList;

const C3Layout = getFormItemLayoutWithoutOffset(3);

const familyColumns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    render: age => `${age}岁`,
  },
  {
    title: '关系',
    dataIndex: 'relationship',
    key: 'relationship',
  },
  {
    title: '工作单位',
    dataIndex: 'employer',
    key: 'employer',
    align: 'left',
  },
  {
    title: '职业',
    dataIndex: 'job',
    key: 'job',
  },
  {
    title: '身份证号码',
    dataIndex: 'idNumber',
    key: 'idNumber',
  },
];

class BasicProfile extends PureComponent {
  state = {
    routeid: createRouteid(),
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'basic-profile/createState',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'basic-profile/clearState',
    });
  }

  // profileData
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    const { routeid } = this.state;
    form.validateFields((err, values) => {
      if (err) return;
      dispatch({
        type: 'basic-profile/reset',
        routeid,
      });
      dispatch({
        type: 'basic-profile/get',
        routeid,
        payload: values.username,
      });
    });
  };

  handleReset = () => {
    const { form, dispatch } = this.props;
    const { routeid } = this.state;
    form.resetFields();
    dispatch({
      type: 'basic-profile/reset',
      routeid,
    });
  };

  renderForm() {
    const { form, getLoading } = this.props;

    return (
      <Spin spinning={getLoading == null ? false : getLoading}>
        <Form onSubmit={this.handleSubmit} layout="inline">
          <Row gutter={16}>
            <UserId
              columnLayout={3}
              columnIndex={0}
              form={form}
              required
              label="用户名"
              field="username"
              placeholder="aaa111 | bbb222"
            />
            <Col {...C3Layout}>
              <span>
                <Button type="primary" htmlType="submit" loading={getLoading}>
                  查询
                </Button>
                <Button style={{ marginLeft: 16 }} onClick={this.handleReset}>
                  重置
                </Button>
              </span>
            </Col>
          </Row>
        </Form>
      </Spin>
    );
  }

  renderProfile() {
    const { basicProfile } = this.props;
    const { routeid } = this.state;
    if (basicProfile[routeid] == null) {
      return;
    }
    const { profileData } = basicProfile[routeid];

    if (isEmptyObject(profileData)) {
      return null;
    }
    const title = `${profileData.username}信息`;
    return (
      <Card title={title} bordered={false}>
        <DescriptionList size="large" title="基本信息" style={{ marginBottom: 32 }}>
          <Description term="用户名">{profileData.username}</Description>
          <Description term="手机号码">{profileData.phone}</Description>
          <Description term="邮箱地址">{profileData.email}</Description>
        </DescriptionList>
        <Divider style={{ marginBottom: 32 }} />
        <DescriptionList size="large" title="详细信息" style={{ marginBottom: 32 }}>
          <Description term="姓名">{profileData.actualName}</Description>
          <Description term="性别">{parseSexValue(profileData.sex)}</Description>
          <Description term="出生日期">
            {parseDateTimeString(profileData.parseBirthday, 'MM-DD-YYYY', 'YYYY年MM月DD日')}
          </Description>
          <Description term="所属城市">{profileData.city}</Description>
        </DescriptionList>
        <Divider style={{ marginBottom: 32 }} />
        <div className={styles.descriptionListTitle}>家庭成员</div>
        <Table
          pagination={false}
          columns={familyColumns}
          rowKey="id"
          dataSource={profileData.family}
          style={{ marginBottom: 32 }}
        />
        <DescriptionList size="large" title="其他信息" style={{ marginBottom: 32 }}>
          <Description term="每月收入">{parseAmtUppercase(profileData.income)}</Description>
          <Description term="备注">{profileData.remark}</Description>
        </DescriptionList>
      </Card>
    );
  }

  render() {
    return (
      <PageHeaderWrapper>
        <Card title="基础详情页" bordered={false} style={{ marginBottom: 24 }}>
          <div className={styles.inlineForm}>{this.renderForm()}</div>
        </Card>
        {this.renderProfile()}
      </PageHeaderWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    basicProfile: state['basic-profile'],
    getLoading: state.loading.effects['basic-profile/get'],
  };
}

export default connect(mapStateToProps)(Form.create()(BasicProfile));
