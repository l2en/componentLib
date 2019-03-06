import axios from 'axios';
import * as _ from 'lodash';

import router from '../router/index'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://mshop.yiyao365.cn'

//设置content-type
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 如果是对象就遍历，通过form-data的key-value对应
 * 如果为对象数组就加key
 * */

axios.defaults.transformRequest = [function (DTO) {
  let ret = new FormData();
  if (!Array.isArray(DTO)) { // post: 如果入参是对象
    for (let i in DTO) {
      if(typeof DTO[i] == 'object' && String(Object.prototype.toString.call(DTO[i][0])) !='[object File]'){
        DTO[i] = JSON.stringify(DTO[i])
      }
      ret.append(i, DTO[i]);
    }
  }
  if (Array.isArray(DTO)) {
    let retArr = [];
    DTO.forEach((item, index) => {
      if (index < DTO.length) {
        retArr.push(item)
      };
    })
    ret.append(DTO['_key'], JSON.stringify(retArr));
  }
  return ret;
}]


// http request 拦截器，再去请求前添加toekn至header
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token');
    }
    config.headers.orgguid = `2`;
    // config.headers.orgguid = `125`;//测试秒杀
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.code == 911) {
      localStorage.removeItem('token')
      router.push({
        name: 'login'
      })
    }
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  });

export default axios
