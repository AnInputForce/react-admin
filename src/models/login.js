import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { userLogin, userLogout } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery, isRespSucc, showErrorMsg } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    code: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(userLogin, payload);
      if (isRespSucc(response)) {
        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.startsWith('/#')) {
              redirect = redirect.substr(2);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      } else {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            ...response,
            data: {
              type: payload.type,
              currentAuthority: 'guest',
              token: undefined,
            },
          },
        });
      }
    },
    *logout(payload, { call, put }) {
      let response = yield call(userLogout, payload);
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      yield put({
        type: 'changeLoginStatus',
        payload: {
          code: undefined,
          message: undefined,
          data: {
            currentAuthority: 'guest',
            token: undefined,
          },
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.data.currentAuthority);
      return {
        ...state,
        code: payload.code,
        message: payload.message,
        type: payload.data.type,
        token: payload.data.token,
      };
    },
  },
};
