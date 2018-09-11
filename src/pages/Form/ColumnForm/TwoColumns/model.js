import { routerRedux } from 'dva/router';
import { getCity, addTwoColumns } from '@/services/Form/ColumnForm/TwoColumns';
import { isRespSucc, isCallSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  formValues: {
    sex: '1',
    submitTestResult: 0,
  },
};

export default {
  namespace: 'two-columns',

  state: {},

  effects: {
    *init({ routeid }, { call, put, select }) {
      const twoColumns = yield select(state => state['two-columns'][routeid]);
      if (twoColumns == null || twoColumns.inited) {
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
      const response = yield call(addTwoColumns, payload.formValues);
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
      yield put(routerRedux.push('/form/column-form/two-columns/output'));
    },
    *redo({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
      yield put(routerRedux.push('/form/column-form/two-columns'));
    },
    *back2edit(_, { put }) {
      yield put(routerRedux.push('/form/column-form/two-columns/input'));
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
