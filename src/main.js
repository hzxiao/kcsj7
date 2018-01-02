// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Code from '@/Common/Code.js'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'

/* common func   临时处理*/
//设置cookie
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  if(expiredays === null)
      expiredays = 1000 * 60 * 60 * 24 * 15;

  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)){
    //console.log(unescape(arr[2]))
    return (unescape(arr[2]));
  }
  else
    return null;
}
Vue.prototype.getCookie = getCookie;
//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
// 全局方法
Vue.prototype.$api = api
Vue.prototype.$code = Code.CodeInit()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
