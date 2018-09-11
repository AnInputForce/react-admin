import { routerRedux } from 'dva/router';
import { getCity, addAdvancedForm, getAccountName } from '@/services/Form/AdvancedForm';
import { isRespSucc, isCallSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  formValues: {
    sex: '1',
    submitTestResult: 0,
    accountType: '1',
  },
};

export default {
  namespace: 'advanced-form',

  state: {},

  effects: {
    *init({ routeid }, { call, put, select }) {
      const advancedForm = yield select(state => state['advanced-form'][routeid]);
      if (advancedForm == null || advancedForm.inited) {
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
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          formValues: payload.formValues,
        },
      });
      const response = yield call(addAdvancedForm, payload.formValues);
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
      yield put(routerRedux.push('/form/advanced-form/output'));
    },
    *getAccountName({ payload }, { call }) {
      const response = yield call(getAccountName, payload.username);
      if (!isRespSucc(response)) {
        return;
      }
      return response.data;
    },
    *redo({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
      yield put(routerRedux.push('/form/advanced-form'));
    },
    *back2edit(_, { put }) {
      yield put(routerRedux.push('/form/advanced-form/input'));
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
