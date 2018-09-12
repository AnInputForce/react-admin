import { getTableData, getTableDataRow } from '@/services/List/StandardTable';
import { isRespSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  pagination: { showSizeChanger: true, showQuickJumper: true },
  dataSource: [],
  asyncRecord: {},
};

export default {
  namespace: 'standard-table',

  state: {},

  effects: {
    *getTable({ routeid, payload }, { select, call, put }) {
      const response = yield call(getTableData, payload);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      const { dataSource } = response.data;
      const standardTable = yield select(state => state['standard-table'][routeid]);
      if (standardTable == null) {
        return;
      }
      let { pagination } = standardTable;
      pagination = {
        ...pagination,
        ...response.data.pagination,
      };
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          dataSource,
          pagination,
        },
      });
    },
    *getTableRow({ routeid, payload }, { call, put }) {
      const response = yield call(getTableDataRow, payload);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          asyncRecord: response.data,
        },
      });
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
