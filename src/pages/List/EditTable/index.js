import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Button, Table, Divider, Spin } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { createRouteid, guid } from '@/utils/utils';
import {
  parseSexValue,
  parseDateTimeString,
  parseAmtUppercase,
  parseCascaderValues,
  parseMomentObject,
} from '@/utils/parse';
import EditModal from './EditModal';

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

class EditTable extends PureComponent {
  state = {
    routeid: createRouteid(),
    expandForm: false,
    params: {},
    formValues: {},
    visible: false,
    record: {},
    isAdd: true,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { routeid } = this.state;
    dispatch({
      type: 'edit-table/createState',
      routeid,
    });
    dispatch({
      type: 'edit-table/init',
      routeid,
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'edit-table/clearState',
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
      type: 'edit-table/get',
      routeid,
      payload: { ...params, ...formValues },
    });
  };

  handleAddClick = () => {
    this.setState({
      record: {
        sex: '1',
        submitTestResult: 0,
      },
      visible: true,
      isAdd: true,
    });
  };

  handleEditClick = record => {
    this.setState({
      record: {
        ...record,
        submitTestResult: 0,
      },
      visible: true,
      isAdd: false,
    });
  };

  handleDeleteClick = record => {
    const { dispatch } = this.props;
    const { routeid, params } = this.state;
    dispatch({
      type: 'edit-table/delete',
      payload: record.id,
    }).then(res => {
      if (res == null) return;
      dispatch({
        type: 'edit-table/get',
        routeid,
        payload: params,
      });
    });
  };

  handleAdd = () => {
    const { dispatch } = this.props;
    const { routeid, params } = this.state;
    this.form.validateFields((err, values) => {
      if (err) return;
      const parseBirthday = parseMomentObject(values.birthday, 'DD-MM-YYYY');
      dispatch({
        type: 'edit-table/add',
        payload: { formData: { ...values, parseBirthday } },
      }).then(res => {
        if (res == null) return;
        this.setState({ visible: false });
        dispatch({
          type: 'edit-table/get',
          routeid,
          payload: params,
        });
      });
    });
  };

  handleEdit = () => {
    const { dispatch } = this.props;
    const { routeid, params } = this.state;
    this.form.validateFields((err, values) => {
      if (err) return;
      const parseBirthday = parseMomentObject(values.birthday, 'DD-MM-YYYY');
      dispatch({
        type: 'edit-table/modify',
        payload: { formData: { ...values, parseBirthday } },
      }).then(res => {
        if (res == null) return;
        this.setState({ visible: false });
        dispatch({
          type: 'edit-table/get',
          routeid,
          payload: params,
        });
      });
    });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  saveForm = form => {
    this.form = form;
  };

  renderAddButton = () =>
    (
      <Button type="primary" style={{ marginBottom: 16 }} onClick={this.handleAddClick}>
        添加
      </Button>
    );

  renderTable() {
    const { routeid } = this.state;
    const { editTable, initLoading, tableLoading, editLoading, deleteLoading } = this.props;

    if (editTable[routeid] == null) {
      return;
    }
    const { pagination, dataSource, cityData } = editTable[routeid];
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
        render: city => parseCascaderValues(cityData, city),
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
        render: (_, record) => (
          <Spin
            size="small"
            spinning={
              (editLoading == null ? false : editLoading)
              || (deleteLoading == null ? false : deleteLoading)
            }
          >
            <a onClick={() => this.handleEditClick(record)}>编辑</a>
            <Divider type="vertical" />
            <a onClick={() => this.handleDeleteClick(record)}>删除</a>
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
        loading={initLoading || tableLoading}
        onChange={this.handleTableChange}
      />
    );
  }

  renderEditModal = () => {
    const { routeid, visible, record, isAdd } = this.state;
    const { editTable } = this.props;

    if (editTable[routeid] == null) {
      return;
    }
    const { cityData } = editTable[routeid];

    return (
      <EditModal
        key={guid()}
        visible={visible}
        isAdd={isAdd}
        record={record}
        cityData={cityData}
        saveForm={this.saveForm}
        onEdit={this.handleEdit}
        onAdd={this.handleAdd}
        onClose={this.handleClose}
      />
    );
  };

  render() {
    return (
      <PageHeaderWrapper>
        <Card title="编辑表格" bordered={false}>
          {this.renderAddButton()}
          {this.renderTable()}
          {this.renderEditModal()}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    editTable: state['edit-table'],
    initLoading: state.loading.effects['edit-table/init'],
    tableLoading: state.loading.effects['edit-table/get'],
    editLoading: state.loading.effects['edit-table/edit'],
    deleteLoading: state.loading.effects['edit-table/delete'],
  };
}

export default connect(mapStateToProps)(Form.create()(EditTable));
