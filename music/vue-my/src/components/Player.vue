<template>
<!-- 使用添加的类名  为bool 的方式   控制了  显隐 -->
  <div class="audio-view" :class="{'audio_panel_hide':toggleHide}">
    <audio  autoplay id="audioPlay" @timeupdate="change()" @ended="next()" @error="next()"></audio>
    <div class="audio-panel-control" @click="togglePanel" 
    :class="{'toggleContral':toggleHide}" >
      <mt-spinner type="snake" :size="27" v-show="audioLoadding"></mt-spinner>
    </div>
   <div class="audio-panel">
    
      <img alt="" class="player-img" :src="audio.imgUrl" @click="showDetailPlayer()"/>
      <div class="player-status" >
        <p class="player-title ellipsis">{{listInfo.firstSongInfo.remark}}</p>
        <p class="player-singer ellipsis">{{singername}}</p>
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
  data() {
    return {
      toggleHide:true
    }
  },
  computed: {
    // 缓存 vuex 中数据的状态
    ...mapGetters(['audio','audioLoadding']),
    ...mapState(['listInfo']),
   singername(){
     var str = this.listInfo.firstSongInfo.filename.toString();
     var arr =  str.split(' - ');
     return arr[0]
    }
  },
  created() {
    this.togglePanel()
    //console.log('从vuex 中取到的信息' + this.listInfo.firstSongInfo)
  },
  methods: {
    togglePanel(){
      console.log(this.audio.title)
        this.toggleHide = !this.toggleHide;
        console.log(this.listInfo.firstSongInfo)
      },
    
      
    
  },
}
  
  
</script>

