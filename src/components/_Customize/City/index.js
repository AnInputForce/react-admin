import React from 'react';
import { Form, Cascader, Col, Spin } from 'antd';
import request from '../_utils/request';
import { isRespSucc, showErrorMsg, isEmptyObject } from '../_utils/utils';
import { getFormItemLayout } from '../_utils/layout';

/**
 * @description 城市选择组件
 * 校验规则1：设置必输时必须选择.
 * @param form: 当前form表单(必传, 类型Form)
 * @param label：标签的文本(必传, 类型string)
 * @param field：绑定的数据元素(必传, 类型string)
 * @param initialValue: 节点的初始值（必传, 类型object）
 * @param columnLayout: 布局列数(可选， 类型number, 默认值1)
 * @param columnIndex: 摆放的列序号(可选， 类型number, 默认值0)
 * @param colon: 表示是否显示 label 后面的冒号(可选，类型boolean, 默认值true)
 * @param hasFeedback: 展示校验状态图标(可选，类型boolean, 默认值false)
 * @param required: 是否必填，如不设置，则会根据校验规则自动生成(可选, 类型boolean, 默认值false)
 * @param disabled: 是否禁用状态(可选, 类型boolean, 默认值false)
 * @param placeholder：提示信息(可选, 类型string, 默认值根据参数自动生成)
 * @param width: 宽度(可选， 类型string, 默认值100%, 按照百分比计算)
 * @param onGetCityValues: 获取城市数据
 * @class City
 * @extends {React.PureComponent}
 */

class City extends React.PureComponent {
  state = {
    cityLoading: false,
    cityValues: [],
  };

  componentWillMount() {
    const { cityValues } = this.props;
    if (cityValues != null && !isEmptyObject(cityValues)) {
      this.setState({
        cityValues,
      });
    } else {
      this.setState({
        cityLoading: true,
      });
      request('/api/city').then(response => {
        if (isRespSucc(response)) {
          this.setState({
            cityValues: response.data,
            cityLoading: false,
          });
          const { onGetCityValues } = this.props;
          if (typeof onGetCityValues === 'function') {
            onGetCityValues(response.data);
          }
        } else {
          this.setState({
            cityLoading: false,
          });
          showErrorMsg(response);
        }
      });
    }
  }

  createFormItem = formItemLayout => {
    const {
      form,
      field,
      initialValue,
      required,
      disabled,
      placeholder,
      width,
      ...rest
    } = this.props;
    const { getFieldDecorator } = form;

    const { label } = this.props;
    const { cityLoading, cityValues } = this.state;
    const inputWidth = width == null ? '100%' : width;
    const cityDisabled = disabled == null ? false : disabled;

    return (
      <Spin spinning={cityLoading}>
        <Form.Item {...formItemLayout} {...rest}>
          {getFieldDecorator(field, {
            initialValue: typeof initialValue === 'function' ? initialValue() : initialValue,
            validateFirst: true,
            rules: [{ required, message: `请选择${label}` }],
          })(
            <Cascader
              showSearch
              style={{ width: inputWidth }}
              disabled={cityDisabled}
              options={cityValues}
              placeholder={placeholder == null ? `请选择${label}` : placeholder}
            />
          )}
        </Form.Item>
      </Spin>
    );
  };

  createLayout = () => {
    const {
      columnLayout: propColumnLayout,
      columnIndex: propColumnIndex,
    } = this.props;

    const columnLayout = propColumnLayout == null ? 1 : propColumnLayout;
    const columnIndex = propColumnIndex == null ? 0 : propColumnIndex;
    const formItemLayout = getFormItemLayout(columnLayout, columnIndex);
    if (columnLayout === 1) {
      return <div>{this.createFormItem(formItemLayout)}</div>;
    }
    return (
      <div>
        <Col {...formItemLayout}>{this.createFormItem({})}</Col>
      </div>
    );
  };

  render() {
    return this.createLayout();
  }
}

export default City;
