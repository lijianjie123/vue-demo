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
          
Vue.config.productionTip = false

Vue.prototype.$http = axios; // 挂载到vue的原型

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
