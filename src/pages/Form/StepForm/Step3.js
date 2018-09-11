import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Button, Input, Radio } from 'antd';
import { AmtInput } from 'react-admin-components';
import { getFormItemLayout, getFormButtonLayout } from '@/utils/layout';

const { TextArea } = Input;
const RadioGroup = Radio.Group;

const C1Layout = getFormItemLayout(1);

class Step3 extends PureComponent {
  handlePrevClick = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/form/step-form/step2'));
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
      dispatch(routerRedux.push('/form/step-form/step4'));
    });
  };

  render() {
    const { form, routeid, stepForm } = this.props;
    const { formValues } = stepForm[routeid];
    const { getFieldDecorator } = form;

    return (
      <div>
        <Form onSubmit={this.handleNextClick}>
          <AmtInput
            form={form}
            required={false}
            hasFeedback
            label="每月收入"
            field="income"
            min={500}
            max={50000}
            decimal={1}
            initialValue={formValues.income}
          />
          <Form.Item {...C1Layout} label="备注">
            {getFieldDecorator('remark', {
              initialValue: formValues.remark,
            })(<TextArea style={{ minHeight: 32 }} placeholder="请输入备注信息" rows={4} />)}
          </Form.Item>
          <Form.Item {...C1Layout} label="提交结果">
            {getFieldDecorator('submitTestResult', {
              initialValue: formValues.submitTestResult,
            })(
              <RadioGroup>
                <Radio value={0}>成功</Radio>
                <Radio value={1}>失败</Radio>
              </RadioGroup>
            )}
          </Form.Item>
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
  };
}

export default connect(mapStateToProps)(Form.create()(Step3));
