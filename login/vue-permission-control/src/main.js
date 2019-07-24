import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

import axios from './config/httpConfig'
// import * as globalFilter from './filters/filters'

Vue.prototype.$http = axios

// Object.keys(globalFilter).forEach(key => {
//     Vue.filter(key, globalFilter[key])
// })

Vue.use(ElementUI)

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
