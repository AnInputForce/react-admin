import { routerRedux } from 'dva/router';
import {
  getAdvancedProfile,
  approvalPass,
  approvalNotPass,
} from '@/services/Profile/AdvancedProfile';
import { isRespSucc, isCallSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  profileData: {},
};

export default {
  namespace: 'advanced-profile',

  state: {},

  effects: {
    *init({ routeid, payload }, { call, put }) {
      const response = yield call(getAdvancedProfile, payload);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          profileData: response.data,
        },
      });
    },
    *pass({ routeid, payload }, { call, put }) {
      const response = yield call(approvalPass, payload);
      if (!isCallSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          response,
        },
      });
      yield put(routerRedux.push('/profile/advanced-profile/output'));
    },
    *notPass({ routeid, payload }, { call, put }) {
      const response = yield call(approvalNotPass, payload);
      if (!isCallSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          response,
        },
      });
      yield put(routerRedux.push('/profile/advanced-profile/output'));
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
