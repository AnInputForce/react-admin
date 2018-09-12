export default {
  namespace: 'public',

  state: {},

  effects: {},

  reducers: {
    addState(state, { payload }) {
      const newState = { ...state, ...payload };
      return newState;
    },
    deleteState(state, { payload }) {
      const newState = { ...state };
      delete newState[payload.key];
      return newState;
    },
  },
};
