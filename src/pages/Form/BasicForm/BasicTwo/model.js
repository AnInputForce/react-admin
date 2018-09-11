import { routerRedux } from 'dva/router';
import { getCity, addBasicTwo } from '@/services/Form/BasicForm/BasicTwo';
import { isRespSucc, isCallSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  formValues: {
    sex: '1',
    submitTestResult: 0,
  },
};

export default {
  namespace: 'basic-two',

  state: {},

  effects: {
    *init({ routeid }, { call, put, select }) {
      const basicTwo = yield select(state => state['basic-two'][routeid]);
      if (basicTwo == null || basicTwo.inited) {
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
      const response = yield call(addBasicTwo, payload.formValues);
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
      yield put(routerRedux.push('/form/basic-form/basic-two/output'));
    },
    *redo({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
      yield put(routerRedux.push('/form/basic-form/basic-two'));
    },
    *back2edit(_, { put }) {
      yield put(routerRedux.push('/form/basic-form/basic-two/input'));
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
