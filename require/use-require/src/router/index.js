import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import App from '../App'
Vue.use(Router)

//const vue1 = () => import('@/components/vue1.vue');



export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      //name: 'vue1',
      component: App,//webpack 异步 import
      //component:vue1
    
      children:[
        {
          path: '/vue1',
          name: 'vue1',
          component: () => import('@/components/vue1')  //webpack 异步 import
          //component:vue1
        },
        {
          path: '/vue2',
          name: 'vue2',
          component: () => import('@/components/vue2')  //webpack 异步 import
        },
        {
          path: '/vue3',
          name: 'vue3',
          component: () => import('@/components/vue3')  //webpack 异步 import
        },
        {
          path: '/vue4',
          name: 'vue4',
          component: () => import('@/components/vue4')  //webpack 异步 import
        },
        {
          path: '/vue5',
          name: 'vue5',
          component: () => import('@/components/vue5')  //webpack 异步 import
        }
      ]
    }
  ]
})
