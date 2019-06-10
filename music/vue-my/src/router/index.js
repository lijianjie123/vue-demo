import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import newSongs from '@/views/NewSongs'
import rank from '@/views/rank'
import RankInfo from '@/views/RankInfo'
import Plist from '@/views/plist'
import singer from '@/views/singer'


import rankinfo from '@/views/RankInfo'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/newSongs',
      component: newSongs,
      alias: '/'
    }, {
      path: '/rank',
      component: rank
    },
    {
      path: '/rank/info/:id',
      component: RankInfo
    },
    {
      path: '/plist',
      component: Plist
    }, {
      path: '/singer',
      component: singer
    }, 
    {
      path: '/rank/info/:id',
      component: rankinfo
    },
    
    {
      path: '*', redirect: '/' //匹配不到 就跳转到跟目录
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
  ]
})
export default router