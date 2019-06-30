import wx from '../utils/wx.js';
import app from '../app.js';

export default {
    namespace: 'login',
  
    state: {
      title: '登录',
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      show: true,
    },
  
    effects: {
      *gotoindex(_) {
        yield wx.switchTab({
          url: '../index/index'
        });
      },

      *bindGetUserInfo(_, { call, put }) {
        let userInfo;
        yield call(wx.login);
        const res  = yield call(wx.getUserInfo);
        userInfo = res.userInfo;
        yield call(wx.setStorage, { key: userInfo.avatarUrl, data: userInfo });
        app.userInfo = userInfo;
        yield put({type: 'gotoindex'});
      },

      *onLoad(_, { call, put }) {
        let userInfo;

        try {
          yield call(wx.checkSession);
          const data = yield call(wx.getStorage, { key: 'userInfo' });
          userInfo = data.data;
          app.userInfo = userInfo;
          yield put({type: 'gotoindex'});
        } catch (e) {
          yield put({type: 'update', payload: { title: '授权登录', show: false }});
        }
      }
    },

    reducers: {
      update(state, {payload}) {
        return {
          ...state,
          ...payload
        };
      }
    },

    subscriptions: {

    }
  }
  