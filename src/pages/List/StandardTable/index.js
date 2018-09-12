import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Card, Form, Row, Col, Button, Spin, Input, Icon, Table, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { parseSexValue, parseDateTimeString, parseAmtUppercase } from '@/utils/parse';
import { getFormItemLayout, getFormItemLayoutWithoutOffset } from '@/utils/layout';
import { createRouteid } from '@/utils/utils';
import styles from './index.less';
import DetailModal from './DetailModal';

const C3I0Layout = getFormItemLayout(3, 0);
const C3I1Layout = getFormItemLayout(3, 1);
const C3I2Layout = getFormItemLayout(3, 1);
const C3Layout = getFormItemLayoutWithoutOffset(3);
const C3I1E2Layout = getFormItemLayout(3, 1, 2);
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

class StandardTable extends PureComponent {
  state = {
    routeid: createRouteid(),
    expandForm: false,
    params: {},
    formValues: {},
    visible: false,
    syncRecord: {},
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'standard-table/createState',
      routeid,
    });
    dispatch({
      type: 'standard-table/getTable',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'standard-table/clearState',
    });
  }

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { routeid, formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }
    this.setState({ params });
    dispatch({
      type: 'standard-table/getTable',
      routeid,
      payload: { ...params, ...formValues },
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { routeid, params } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      this.setState({
        formValues: fieldsValue,
      });
      dispatch({
        type: 'standard-table/getTable',
        routeid,
        payload: { ...params, ...fieldsValue },
      });
    });
  };

  handleReset = () => {
    const { form, dispatch } = this.props;
    const { routeid } = this.state;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'standard-table/getTable',
      routeid,
    });
  };

  handleSyncViewClick = record => {
    this.setState({
      syncRecord: record,
      visible: true,
    });
  };

  handleAsyncViewClick = record => {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'standard-table/getTableRow',
      routeid,
      payload: { id: record.id },
    }).then(() => {
      this.setState({
        visible: true,
      });
    });
  };

  handleModalClose = () => {
    this.setState({
      visible: false,
      syncRecord: {},
    });
  };

  renderSimpleForm() {
    const { form: { getFieldDecorator } } = this.props;

    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={16}>
          <Col {...C3I0Layout}>
            <Form.Item label="用户编号">
              {getFieldDecorator('userid', {})(<Input placeholder="请输入用户编号" />)}
            </Form.Item>
          </Col>
          <Col {...C3I1Layout}>
            <Form.Item label="手机号码">
              {getFieldDecorator('phone', {})(<Input placeholder="请输入手机号码" />)}
            </Form.Item>
          </Col>
          <Col {...C3Layout} style={{ textAlign: 'left' }}>
            <span>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 16 }} onClick={this.handleReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const { form: { getFieldDecorator } } = this.props;

    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={16}>
          <Col {...C3I0Layout}>
            <Form.Item label="用户编号">
              {getFieldDecorator('userid', {})(<Input placeholder="请输入用户编号" />)}
            </Form.Item>
          </Col>
          <Col {...C3I1Layout}>
            <Form.Item label="手机号码">
              {getFieldDecorator('phone', {})(<Input placeholder="请输入手机号码" />)}
            </Form.Item>
          </Col>
          <Col {...C3I2Layout}>
            <Form.Item label="邮箱地址">
              {getFieldDecorator('email', {})(<Input placeholder="请输入邮箱地址" />)}
            </Form.Item>
          </Col>
          <Col {...C3I0Layout}>
            <Form.Item label="真实姓名">
              {getFieldDecorator('actualName', {})(<Input placeholder="请输入真实姓名" />)}
            </Form.Item>
          </Col>
          <Col {...C3I1E2Layout} style={{ textAlign: 'right' }}>
            <span>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 16 }} onClick={this.handleReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                收起 <Icon type="up" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    const { expandForm } = this.state;
    return (
      <Fragment>
        {expandForm ? this.renderAdvancedForm() : this.renderSimpleForm()}
      </Fragment>
    );
  }

  renderTable() {
    const { standardTable, tableLoading, tableRowLoading } = this.props;
    const { routeid } = this.state;

    if (standardTable[routeid] == null) {
      return;
    }
    const { pagination, dataSource } = standardTable[routeid];
    const columns = [
      {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        sorter: true,
      },
      {
        title: '用户编号',
        dataIndex: 'userid',
        key: 'userid',
      },
      {
        title: '手机号码',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '邮箱地址',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '真实姓名',
        dataIndex: 'actualName',
        key: 'actualName',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        filters: [
          {
            text: '男',
            value: '1',
          },
          {
            text: '女',
            value: '2',
          },
        ],
        render: sex => parseSexValue(sex),
      },
      {
        title: '出生日期',
        dataIndex: 'birthday',
        key: 'birthday',
        render: birthday => parseDateTimeString(birthday, 'DD-MM-YYYY', 'YYYY年MM月DD日'),
      },
      {
        title: '所属城市',
        dataIndex: 'city',
        key: 'city',
      },
      {
        title: '每月收入',
        dataIndex: 'income',
        key: 'income',
        sorter: true,
        render: income => parseAmtUppercase(income),
      },
      {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: 100,
      },
      {
        title: '操作',
        render: (text, record) => (
          <Spin size="small" spinning={tableRowLoading == null ? false : tableRowLoading}>
            <a onClick={() => this.handleSyncViewClick(record)}>同步查看</a>
            <Divider type="vertical" />
            <a onClick={() => this.handleAsyncViewClick(record)}>异步查看</a>
          </Spin>
        ),
      },
    ];
    return (
      <Table
        columns={columns}
        rowKey="id"
        dataSource={dataSource}
        pagination={pagination}
        loading={tableLoading}
        onChange={this.handleTableChange}
      />
    );
  }

  renderDetailModal = () => {
    const { routeid, visible, syncRecord } = this.state;
    const { standardTable } = this.props;

    if (standardTable[routeid] == null) {
      return;
    }
    const { asyncRecord } = standardTable[routeid];
    const record = Object.keys(syncRecord).length === 0 ? asyncRecord : syncRecord;
    return <DetailModal visible={visible} record={record} onClose={this.handleModalClose} />;
  };

  render() {
    return (
      <PageHeaderWrapper>
        <Card title="标准表格" bordered={false}>
          <div className={styles.inlineForm} style={{ marginBottom: 8 }}>
            {this.renderForm()}
          </div>
          {this.renderTable()}
          {this.renderDetailModal()}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    standardTable: state['standard-table'],
    tableLoading: state.loading.effects['standard-table/getTable'],
    tableRowLoading: state.loading.effects['standard-table/getTableRow'],
  };
}

export default connect(mapStateToProps)(Form.create()(StandardTable));
