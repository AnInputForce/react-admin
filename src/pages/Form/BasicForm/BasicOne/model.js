import { routerRedux } from 'dva/router';
import { getCity, addBasicOne } from '@/services/Form/BasicForm/BasicOne';
import { isRespSucc, isCallSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  formValues: {
    sex: '1',
    submitTestResult: 0,
  },
};

export default {
  namespace: 'basic-one',

  state: {},

  effects: {
    *init({ routeid }, { call, put, select }) {
      const basicOne = yield select(state => state['basic-one'][routeid]);
      if (basicOne == null || basicOne.inited) {
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
      const response = yield call(addBasicOne, payload.formValues);
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
      yield put(routerRedux.push('/form/basic-form/basic-one/output'));
    },
    *redo({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
      yield put(routerRedux.push('/form/basic-form/basic-one'));
    },
    *back2edit(_, { put }) {
      yield put(routerRedux.push('/form/basic-form/basic-one/input'));
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
