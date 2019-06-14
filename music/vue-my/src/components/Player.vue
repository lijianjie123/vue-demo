<template>
<!-- 使用添加的类名  为bool 的方式   控制了  显隐 -->
  <div class="audio-view" :class="{'audio_panel_hide':toggleHideV}"> {{toggleHideV}}
    <audio  autoplay id="audioPlay" @timeupdate="change()" @ended="next()" @error="next()"></audio>
    <div class="audio-panel-control" @click="togglePanel" 
    :class="{'toggleContral':toggleHideV}" >{{toggleHideV}}
      <mt-spinner type="snake" :size="27" v-show="audioLoadding"></mt-spinner>
    </div>
   <div class="audio-panel">
    
      <img alt="" class="player-img" :src="audio.imgUrl" @click="showDetailPlayer()"/>
      <div class="player-status" >
        <p class="player-title ellipsis">{{audio.title}}</p>
        <p class="player-singer ellipsis">{{audio.singer}}</p>
      </div>
       <div class="player-controls">
        <span class="player-Play" ></span>
        <span class="player-nextSong" ></span>
      </div>
      
    </div>
   
  </div>
</template>

<script type="es6">
import {mapGetters} from 'vuex' 
import {mapState} from 'vuex' 
export default {
  // data() {
  //   return {
  //    toggleHide:this.toggleHideV //  false 代表隐藏播放按钮详情，  true  代表显示    .audio_panel_hide{ bottom:-64px}//   
  //   }
  // },
  computed: {
    // 缓存 vuex 中数据的状态  组件中使用vuex的 ...mapGetters ...mapState方法 要放在  组件的 conputed 函数中  如下：
    ...mapGetters(['audio','audioLoadding','showPlay', 'toggleHideV']),
   
  //  singername(){
  //    var str = this.listInfo.firstSongInfo.filename.toString();
  //    var arr =  str.split(' - ');
  //    return arr[0]
  //   }
  },
  // created() {
  //   this.togglePanel()
  // },
  // watch: {
  //   toggleHideV(){
  //     //this.toggleHideV = 
  //     this.togglePanel()
  //   }
  // },
  methods: {
    togglePanel(){
      // console.log('111')
      //   this.toggleHideV = !this.toggleHideV;
      //   console.log(this.toggleHideV)
      //计算属性中的值 会被缓存     getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
        this.$store.commit('setToggleHide', !this.toggleHideV)
        
    },


    
      
    
  },
}
  
  
</script>

