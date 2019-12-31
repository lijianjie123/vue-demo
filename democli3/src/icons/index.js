import Vue from 'vue'
import svgicon from '@/components/svgicon.vue'

// 全局引入SvgIcon组件
Vue.component('svgicon', svgicon)


const req = require.context('./svg', false,/\.svg$/)  // 文件mulu  false不会有子文件夹  正则匹配
 // ['qq.svg', 'wx.svg']
req.keys().map(req);  //自动加载  需在main.js 中引入

