import Vue from 'vue'
import Router from 'vue-router'

import Login from 'pages/login/login'
//import index from 'pages/login/index'
import NotFound from 'pages/errorPage/404'
import Forbidden from 'pages/errorPage/403'
import Layout from 'pages/layout/index'
import Home from 'pages/home/index'

Vue.use(Router)

/* 初始路由 */

export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
})

/* 准备动态添加的路由 */

export const DynamicRoutes = [
    {
        path: '',
        component: Layout,
        name: 'container',
        redirect: 'home',
        meta: {
            requiresAuth: true,//代表需要权限验证
            name: '首页'
        },
        children: [
            {
                path: 'home',
                component: Home,
                name: 'home',
                meta: {
                    name: '首页',
                    icon: 'icon-home'
                }
            },
            
        ]
    },
    {
        path: '/403',
        component: Forbidden
    },
    {
        path: '*',
        component: NotFound
    }
]
 