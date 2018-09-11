import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Button, DatePicker, Spin, Cascader } from 'antd';
import { Name, Sex } from 'react-admin-components';
import { getFormItemLayout, getFormButtonLayout } from '@/utils/layout';

const C1Layout = getFormItemLayout(1);

class Step2 extends PureComponent {
  componentWillMount() {
    const { dispatch, routeid } = this.props;
    dispatch({
      type: 'step-form/step2Init',
      routeid,
    });
  }

  handlePrevClick = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/form/step-form/step1'));
  };

  handleNextClick = e => {
    e.preventDefault();
    const { form, dispatch, routeid, stepForm } = this.props;
    const { formValues } = stepForm[routeid];
    form.validateFields((err, values) => {
      if (err) return;
      dispatch({
        type: 'step-form/saveFormValues',
        routeid,
        payload: { formValues: { ...formValues, ...values } },
      });
      dispatch(routerRedux.push('/form/step-form/step3'));
    });
  };

  render() {
    const { form, routeid, stepForm, step2InitLoading } = this.props;
    const { cityValues, formValues } = stepForm[routeid];
    const { getFieldDecorator } = form;
    return (
      <div>
        <Form onSubmit={this.handleNextClick}>
          <Name
            form={form}
            required
            hasFeedback
            label="姓名"
            field="actualName"
            initialValue={formValues.actualName}
          />
          <Sex form={form} required label="性别" field="sex" initialValue={formValues.sex} />
          <Form.Item {...C1Layout} label="出生日期">
            {getFieldDecorator('birthday', {
              initialValue: formValues.birthday,
              validateFirst: true,
              rules: [
                {
                  required: true,
                  message: '请选择出生日期',
                },
              ],
            })(<DatePicker style={{ width: '100%' }} />)}
          </Form.Item>
          <Spin spinning={step2InitLoading == null ? false : step2InitLoading}>
            <Form.Item {...C1Layout} label="所属城市">
              {getFieldDecorator('city', {
                initialValue: formValues.city,
                validateFirst: true,
                rules: [
                  {
                    type: 'array',
                    required: true,
                    message: '请选择所属城市',
                  },
                ],
              })(<Cascader showSearch options={cityValues} placeholder="请选择所属城市" />)}
            </Form.Item>
          </Spin>
          <Form.Item {...getFormButtonLayout(1)} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit">
              下一步
            </Button>
            <Button style={{ marginLeft: 16 }} onClick={this.handlePrevClick}>
              上一步
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stepForm: state['step-form'],
    step2InitLoading: state.loading.effects['step-form/step2Init'],
  };
}

export default connect(mapStateToProps)(Form.create()(Step2));
