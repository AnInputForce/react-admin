import { routerRedux } from 'dva/router';
import { getHeader, getList } from '@/services/List/StandardList';
import { isRespSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  headerData: {
    pending: 0,
    highPriority: 0,
    completed: 0,
  },
  listData: [],
  total: 0,
};

export default {
  namespace: 'standard-list',

  state: {},

  effects: {
    *init({ routeid, payload }, { call, put }) {
      const response = yield call(getHeader);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          headerData: response.data,
        },
      });
      yield put({
        type: 'get',
        routeid,
        payload,
      });
    },
    *get({ routeid, payload }, { call, put }) {
      const response = yield call(getList, payload.params);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          total: response.data.total,
          listData: response.data.dataSource,
          date: new Date(),
        },
      });
    },
    *approved({ payload }, { put }) {
      yield put({
        type: 'public/addState',
        payload,
      });
      yield put(routerRedux.push('/profile/advanced-profile'));
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
