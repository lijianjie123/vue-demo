// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //入口文件  需要引入  vuex

import axios from 'axios' // 入口文件引入axios 
// 引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './assets/css/neat-min.css'
import './assets/css/style.css'
 
axios.defaults.headers.post["content-type"] = "application/x-www-form-urlencoded"

Vue.config.productionTip = false

Vue.prototype.$http = axios; // 挂载到vue的原型

// Vue.prototype.baseUrl = process.env.NODE_ENV === "production"? "http://m.kugou.com" : "/proxy"


// https://www.hangge.com/blog/cache/detail_2496.html
axios.defaults.baseURL = process.env.API_HOST  //设置 axios 的默认 baseURL。这个是项目中用到axios的就能

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
