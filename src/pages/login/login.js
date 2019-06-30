import connect from '../../utils/connect.js';
import { mergeOptions } from '../../utils/wx.js';


// 创建页面
const page = mergeOptions({
  onLoad(options) {
    const {dispatch} = this;
    dispatch({type: `login/onLoad`});
  },
});


// 映射全局State到页面state
const mapState = ({login, loading}) => {
  return {
    ...login,
    loading,
  };
};

// 这里登记页面事件响应代码，通过dispatch发送到model实际业务处理
const mapFunc = (dispatch) => {
  return {
    bindGetUserInfo(event) {
      dispatch({ type: `login/bindGetUserInfo` });
    }
  };
};

Page(connect(mapState, mapFunc)(page));
