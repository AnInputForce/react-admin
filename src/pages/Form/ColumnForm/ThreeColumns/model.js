import { routerRedux } from 'dva/router';
import addThreeColumns from '@/services/Form/ColumnForm/ThreeColumns';
import { isCallSucc } from '@/utils/utils';

const initState = {
  formValues: {
    sex: '1',
    submitTestResult: 0,
  },
};

export default {
  namespace: 'three-columns',

  state: {},

  effects: {
    *setCityValues({ routeid, payload }, { put }) {
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          cityValues: payload.cityValues,
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
      const response = yield call(addThreeColumns, payload.formValues);
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
      yield put(routerRedux.push('/form/column-form/three-columns/output'));
    },
    *redo({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
      yield put(routerRedux.push('/form/column-form/three-columns'));
    },
    *back2edit(_, { put }) {
      yield put(routerRedux.push('/form/column-form/three-columns/input'));
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
