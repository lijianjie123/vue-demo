<template>
  <div v-show="detailPlayerFlag">
    <div class="detail_player" style=""></div>
    <div class="detail_player"
         style=""></div>
    <div class="detail_player-content">
      <div class="detail_player-title container">
        <span class="detail_player-back" @click = 'singerBack'></span>
        {{audio.title}}
      </div>
      <div class="detail_player-img">
        <img :src="audio.imgUrl">
      </div>
      <div class="detail_player-lrc">
        <div class="lrc-content" style="">
          <p >
            {{}}</p>
        </div>
      </div>
      <div class="detail_player-range container">
        <span class="detail_player-time">{{audio.songLength | time}}</span>
        <!--input事件会一直触发，所以禁用range，改为onclick-->
        <mt-range
          ></mt-range>
        <span class="detail_player-time">{{audio.songLength | time}}</span>
      </div>
      <div class="detail_player-control player-padding">
        <i class="detail_player-btn play-prev player_btn-sm" ></i>
        <i class="detail_player-btn play-play player_btn-lg" ></i>
        <i class="detail_player-btn play-next player_btn-sm"></i>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters} from 'vuex';
  export default{
    filters: {
      //过滤器的本质 就是一个有参数有返回值的方法{{audio.songLength | time}}    '|'（管道符）前的数据（audio.songLength）作为参数  传递 
      time(value){ //value 的实参 就是 '|'（管道符） 前的  那个数据
        var length = Math.floor(parseInt(value));
        var minute = Math.floor(value / 60);
        if (minute < 10) {
          minute = '0' + minute;
        }
        var second = length % 60;
        if (second < 10) {
          second = '0' + second;
        }
        return minute + ':' + second;
      },
    },
    computed: {
      ...mapGetters(['detailPlayerFlag','audio'])
    },
    methods:{
      singerBack(){
        //this.$router.go(-1)
        //只是切换显隐  不要使用 路由的历史记录函数
        this.$store.commit('showDetailPlayer',false)
        console.log('datailPlayer.vue-----',this.detailPlayerFlag)
      },
      songLength(){

      }
    }
  }
  
 
  
  
</script>
