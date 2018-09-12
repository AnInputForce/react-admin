import getBasicProfile from '@/services/Profile/BasicProfile';
import { isRespSucc, showErrorMsg } from '@/utils/utils';

const initState = {
  profileData: {},
};

export default {
  namespace: 'basic-profile',

  state: {},

  effects: {
    *get({ routeid, payload }, { call, put }) {
      const response = yield call(getBasicProfile, payload);
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
    *reset({ routeid }, { put }) {
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          profileData: {},
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
