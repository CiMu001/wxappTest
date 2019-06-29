export default {
  namespace: 'order',

  state: {
    title: 'hello 订单 !!!',
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
