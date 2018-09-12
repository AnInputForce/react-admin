import { routerRedux } from 'dva/router';

export default {
  namespace: 'detail-comp',

  state: {
    data: undefined,
    gobackRoute: undefined,
  },

  effects: {
    *init({ payload }, { put }) {
      yield put({
        type: 'saveContext',
        payload,
      });
      yield put(routerRedux.push('/comp/detail-comp'));
    },
  },

  reducers: {
    saveContext(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
