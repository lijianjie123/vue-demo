<template>
  <div id="app">
    <!-- <svg>
         <use xlink:href = "#icon-qq"></use>
    </svg>
    <svg>
         <use xlink:href = "#icon-wx"></use>
    </svg> -->



    <!-- 封城组件使用 -->
    <svgicon icon-class = "qq"></svgicon>
    <svgicon icon-class = "wx"></svgicon>

    <img alt="Vue logo" src="./assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

/* svg {background: red} */
</style>
