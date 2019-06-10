<template>
  <div class="header">
    <HeadLogo></HeadLogo>
  
    <!-- RankHead没有导航的组件 -->
    <!-- 默认先 显示导航组件   所以要让这里的值  head.toggle是false -->
    <!-- 这里RankHead  是父组件  绑定了  title  和cStyle  属性数据 向其子组件传递数据，
    所以 在RankHead 的模板中用props  接收了数据 -->
    <RankHead v-if="head.toggle" :title="head.title" :cStyle="head.style" />
  <!-- HeadNav有导航的组件  新歌 排行 歌单 歌手 -->
    <!-- 默认先 显示导航组件 -->
    <HeadNav v-else></HeadNav>
    
    
  </div>
</template>

<script type="es6">
  //import HeadLogo from './components/header/HeadLogo';  这个写法报错
  import HeadLogo from '@/components/header/HeadLogo';
  import HeadNav from '@/components/header/HeadNav';
  import RankHead from '@/components/header/RankHead'

  import {mapGetters} from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['head'])
    },
    components: {HeadLogo,HeadNav,RankHead}
   
  }
</script>
