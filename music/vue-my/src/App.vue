<template>
  <div id="app">
    <Head />
    <div class="main">
      <router-view></router-view>
    </div>
   
    <!-- // 是否显示 播放组件 -->
    <Player></Player>
    <!-- 歌曲播放组件 -->
    <DetailPlayer></DetailPlayer>
  </div>
</template>

<script>
import Head from './components/header/Head' //导入组件
import Player from './components/Player'
import DetailPlayer from './components/DetailPlayer'
export default {
  name: 'App',
  components:{ //注册组件
    Head,
    Player,
    DetailPlayer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
