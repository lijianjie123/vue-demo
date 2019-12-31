<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">
      
      Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">
      <svg>
         <use xlink:href = "#icon-wx"></use>
      </svg>
      <svg>
         <use xlink:href = "#icon-qq"></use>
      </svg>
      <svg>
         <use xlink:href = "#icon-qq"></use>
      </svg>
      Forum</a></li>
      <li style="color:green"><a href="https://chat.vuejs.org" target="_blank" rel="noopener">
      <svgicon icon-class = "wx"></svgicon>
      <svgicon icon-class = "qq2"></svgicon>
      <svgicon icon-class = "baidu"></svgicon>
      Community Chat</a></li>
      <li ><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" style="color:red">
      <svgicon icon-class = "QQ1"></svgicon>
      <svgicon icon-class = "baidu"></svgicon>
      Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener" style="color:green; font-size:30px;">
      <svgicon icon-class = "baidu"></svgicon>
      News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
//使用 svg 组件  就不用引入了
import "@/icons/svg/qq.svg"; 
import "@/icons/svg/wx.svg"; 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;
}
a:hover{
  color: #000;
}
</style>
