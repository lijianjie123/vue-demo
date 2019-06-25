import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import newSongs from '@/views/NewSongs'
import rank from '@/views/rank'
import RankInfo from '@/views/RankInfo'
import Plist from '@/views/plist'
import PlistInfo from '@/views/PlistInfo'
import singer from '@/views/singer'
import singerList from '@/views/SingerList'
import singerInfo from '@/views/SingerInfo'
import search from '@/views/search'


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
    }, 
    {
      path: '/plist/info/:id',
     // name:PlistInfo,
      component:PlistInfo
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/singer/list/:id',
      component: singerList
    }, 
    {
      path: '/singer/info/:id',
      component: singerInfo
    },
    {
      path: '/search',
      //name:search,
      component: search
    },
    
  
    {
      path: '*', redirect: '/' //匹配不到 就跳转到跟目录
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    
  ]
})
export default router