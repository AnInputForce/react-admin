import {
  getTableData,
  getCity,
  addTable,
  editTable,
  deleteTable,
} from '@/services/List/EditTable';
import { isRespSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  pagination: { showSizeChanger: true, showQuickJumper: true },
  dataSource: [],
};

export default {
  namespace: 'edit-table',

  state: {},

  effects: {
    *init({ routeid, payload }, { call, put }) {
      const response = yield call(getCity);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      const cityData = response.data;
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          cityData,
        },
      });
      yield put({
        type: 'get',
        routeid,
        payload,
      });
    },
    *get({ routeid, payload }, { select, call, put }) {
      const response = yield call(getTableData, payload);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      const { dataSource } = response.data;
      const editTableState = yield select(state => state['edit-table'][routeid]);
      if (editTableState == null) {
        return;
      }
      let { pagination } = editTableState;
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
    *add({ payload }, { call }) {
      const response = yield call(addTable, payload.formData);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      return response.code;
    },
    *modify({ payload }, { call }) {
      const response = yield call(editTable, payload.formData);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      return response.code;
    },
    *delete({ payload }, { call }) {
      let response = yield call(deleteTable, payload);
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      return response.code;
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
