<template>
  <div class="header-nav">
    
    <mt-navbar  class="container" v-model="headNav">
      <!-- 这个组件上用to  跳转不了 -->
      <mt-tab-item id="head-nav1" >新歌</mt-tab-item>
      <mt-tab-item id="head-nav2" >排行</mt-tab-item>
      <mt-tab-item id="head-nav3" >歌单</mt-tab-item>
      <mt-tab-item id="head-nav4" >歌手</mt-tab-item>
    </mt-navbar>
    
  </div>
</template>

<script type="es6">
// 组件中使用vuex 中的数据  

  export default {
    name: 'head-nav',
    computed: {
    	headNav:{
        // 计算属性中 获取的方式
        get(){
          return this.$store.state.headNav
        },
        // 计算属性中 设置新值的方式
        set(newheadnav){
          console.log(newheadnav) //哪到了新值  要想办法修改vuex 中的 headernav的状态 
          this.$store.commit('changeHeadnav', newheadnav)
          this.goRouter(newheadnav)
        }
    		
	    }
    },

    // watch:{
    //   'headNav'(){
    //     console.log('改变了值为：' + this.headNav)

    //   }
    // },
    // updated() {
    //   console.log('更新了')

    // },
    methods: {
      goRouter(newheadnav){
        switch(newheadnav){
          case 'head-nav1':
            this.$router.push({path: '/'});
            break;
          case 'head-nav2':
            this.$router.push({path: '/rank'});
            break;
          case 'head-nav3':
            this.$router.push({path: '/plist'});
            break;
          case 'head-nav4':
            this.$router.push({path: '/singer'});
            break;
        }
      }
      
    }
  }
</script>

<style>
  .mint-tab-item {
    padding: 12px 0 !important;
  }

  .mint-tab-item-label {
    font-size: 16px !important;
  }
</style>
