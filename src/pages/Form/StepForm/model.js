import { routerRedux } from 'dva/router';
import { getCity, addStepForm } from '@/services/Form/StepForm';
import { isRespSucc, isCallSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  formValues: {
    sex: '1',
    submitTestResult: 0,
  },
};

export default {
  namespace: 'step-form',

  state: {},

  effects: {
    *saveFormValues({ routeid, payload }, { put }) {
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          formValues: payload.formValues,
        },
      });
    },
    *step2Init({ routeid }, { call, put, select }) {
      const stepForm = yield select(state => state['step-form'][routeid]);
      if (stepForm == null || stepForm.inited) {
        return;
      }
      const response = yield call(getCity);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          cityValues: response.data,
          inited: true,
        },
      });
    },
    *submit({ routeid, payload }, { call, put }) {
      const response = yield call(addStepForm, payload.formValues);
      if (!isCallSucc(response)) {
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          response,
        },
      });
      yield put(routerRedux.push('/form/step-form/step5'));
    },
    *redo({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
      yield put(routerRedux.push('/form/step-form/step1'));
    },
    *back2edit(_, { put }) {
      yield put(routerRedux.push('/form/step-form/step1'));
    },
  },

  reducers: {
    createState(_, { routeid }) {
      const newState = {};
      newState[routeid] = { ...initState };
      return newState;
    },
    saveState(state, { routeid, payload }) {
      const newState = { ...state };
      newState[routeid] = { ...state[routeid], ...payload };
      return newState;
    },
    clearState() {
      return {};
    },
  },
};
