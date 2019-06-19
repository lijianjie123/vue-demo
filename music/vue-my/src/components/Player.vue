<template>
<!-- 使用添加的类名  为bool 的方式   控制了  显隐 -->
  <div class="audio-view" :class="{'audio_panel_hide':toggleHideV}"> isPlay--{{isPlay}}---{{audio.songLength}}
    <audio :src="audio.songUrl" autoplay id="audioPlay" @timeupdate="change()" @ended="next()" @error="next()"></audio>
    <div class="audio-panel-control" @click="togglePanel" 
    :class="{'toggleContral':toggleHideV}" >{{toggleHideV}}
      <mt-spinner type="snake" :size="27" v-show="audioLoadding"></mt-spinner>
    </div>
   <div class="audio-panel">
    
      <img alt="" class="player-img" :src="audio.imgUrl" @click="showDetailPlayer()"/>
      <div class="player-status" @click="showDetailPlayer()">
        <p class="player-title ellipsis">{{audio.title}}</p>
        <p class="player-singer ellipsis">{{audio.singer}}</p>
      </div>
       <div class="player-controls">
        <span class="player-Play" @click="toggleStatus()" :class="{'player-Pause':!isPlay}"></span>
        <span class="player-nextSong"  @click = next()></span>
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
    ...mapGetters(['audio','audioLoadding','showPlay', 'toggleHideV', 'isPlay', ]),
  },
  // created() {
  //   this.togglePanel()
  // },
  methods: {
    togglePanel(){
      // console.log('111')
      //   this.toggleHideV = !this.toggleHideV;
      //   console.log(this.toggleHideV)
      //计算属性中的值 会被缓存     getter 的返回值会根据它的依赖被缓存起来，
      // 且只有当它的依赖值发生了改变才会被重新计算。
        this.$store.commit('setToggleHide', !this.toggleHideV)
        
    },
    showDetailPlayer(){
      this.$store.commit('showDetailPlayer',true)

    },
    toggleStatus(){
      console.log('play.vue---' , this.isPlay)
        if (!this.isPlay) {
          // paly()方法和pause()方法  是HTML5里新增的 audio和video里的方法
          // 使用这两个方法要对  dom对象使用   所以这里获取了 dom元素
          document.getElementById('audioPlay').pause();
        } else {
          document.getElementById('audioPlay').play();
        }
        // 给vuex 中的'isPlay'  取反 
        this.$store.commit('isPlay', !this.isPlay);
    },
    change(){
        // audio.currentTime = 5; 将时间位置设置为5s  currentTime：返回当前音频的现在时间
        var time = document.getElementById('audioPlay').currentTime
        this.audio.currentLength = time ; 
        if (this.audio.currentFlag) { // this.audio.currentFlag   通过vuex  中读取的     设置了  初始值为false
          document.getElementById('audioPlay').currentTime = this.audio.currentLength;
          //this.$store.commit('setCurrent', false);
        } else {
          //this.$store.commit('setAudio', audio);
        }
      },
      next(){
        // 播放完成  请求下一歌曲 播放
        this.$store.dispatch('next');
      }


    
      
    
  },
}
  
  
</script>

