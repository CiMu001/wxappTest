export default {
  namespace: 'index',

  state: {
    title: 'hello 小程序 !!!',
  },

  reducers: {
    update(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    }
  },

  effects: {
  },

  subscriptions: {
  }
}
