import connect from '../../utils/connect.js';
import { mergeOptions } from '../../utils/wx.js';


// 创建页面
const page = mergeOptions({
  onLoad(options) {
    const {dispatch} = this;
  },
});


// 映射全局State到页面state
const mapState = ({order, loading}) => {
  return {
    ...order,
    loading,
  };
};

// 这里登记页面事件响应代码，通过dispatch发送到model实际业务处理
const mapFunc = (dispatch) => {
  return {
  };
};

Page(connect(mapState, mapFunc)(page));
