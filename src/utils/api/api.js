import request from '../request.js';

const get = (url) => {
  return request(url, {method: 'GET'});
};

export default {
};
