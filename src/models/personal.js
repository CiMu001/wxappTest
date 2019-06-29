export default {
  namespace: 'personal',

  state: {
    title: 'hello 个人中心 !!!',
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
