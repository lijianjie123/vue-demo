import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'  // 导入的初始路由

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

import axios from './config/httpConfig'
import * as globalFilter from './filters/filters'

Vue.prototype.$http = axios

Object.keys(globalFilter).forEach(key => {
    Vue.filter(key, globalFilter[key])
})
console.log('globalFilter', Object.keys(globalFilter))
console.log(globalFilter)


Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    console.log('beforeEach' )
    console.log('to', to)
    console.log('from', from)
    console.log('next', next)
    //如果UserToken 不存在  说明用户没有登录
    if (!store.state.UserToken) {
        console.log(1) 
        //UserToken不存在  代表访问的是不需要权限的路由
        // 然后看看 to.matched 是 将要进入导航路由表  有没有存在需要权限的 路由
        //将要进入导航路由表存在  并且 都不需要权限就能访问
        //record  记录
        if (
            to.matched.length > 0 &&
            !to.matched.some(record => record.meta.requiresAuth)
        ) {
            console.log(5)
            next()
        } else {
            console.log(3)
            next({ path: '/login' })
        }
    } else { //如果UserToken 存在
        //userToken  存在    根据用户token 进行权限验证
        // 路由列表是否存在   不存在的话 发起请求 
        console.log(2, store.state.permission)
        // 路由列表是否为真
        if (!store.state.permission.permissionList) {
            console.log(4)
            // 触发异步函数
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
               // console.log(to.path)
                next({ path: to.path })
                console.log('1111111111', to.path)
            })
        } else {
            //如果路由存在  判断一下 to.path
            if (to.path !== '/login') { // 这步防止进入死循环
                next()
            } else {
                next(from.fullPath) //fullPath匹配路由，path匹配路径
            }
        }
    }
})


// router.beforeEach((to, from, next)=>{
//     // 全局路由守卫会先执行
//     //先看UserToken存不存在
//     if(!store.state.UserToken){
//         // if(){}
//     }else{ // 存在

        

//     }

// })

router.afterEach((to, from, next) => {
    var routerList = to.matched
    store.commit('setCrumbList', routerList)
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
