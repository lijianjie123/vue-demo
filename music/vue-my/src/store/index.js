import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    //播放歌曲的信息
    audio:{
      songUrl: '',
			imgUrl: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
			title: '',
			singer: '',
			currentLength: 0,
			songLength: 0,
      currentFlag: false
      
    },
    head: {
			toggle: false,
			title: '',
			style: {'background': 'rgba(43,162,251,0)'}
    },
    

    toggleHideV:true,  //true为隐藏

    listenCount:0,  // 记录播放过几首歌曲  默认0开始
    showPlay:false, //播放详情 默认不显示
    audioLoadding: false,
    headNav:'head-nav1',// 默认导航显示第一个选项
    detailPlayerFlag: false, // 播放的歌曲是否显示  默认不显示
    //默认状态单个歌曲信息
    listInfo:{
      songs:[], //歌曲xinxi
      songIndex:'0' , // 默认第一首歌曲索引
     // firstSongInfo:[],
    },
    
    
  },
  getters:{
    // 箭头函数  只包含一个表达式，可以省略{ … }和return
    audio : state => state.audio,
    audioLoadding : state => state.audioLoadding,
    //firstSongInfo : state =>{ } 
    head: state=>state.head,
    // showPlay : state =>{
    //   state.showPlay
    // } ,
    toggleHideV : state=>{ return state.toggleHideV}
    
  },
  mutations:{
    //用来更改 导航值
    changeHeadnav(state, val){
      //console.log(val)
      state.headNav = val

    },

    setAudio(state, {audio}){
      if(!state.listenCount){
        //state.toggleHideV = true //首次进入应用时 不打开播放详情
      }

      state.listenCount ++

      state.audio = {...audio}
    }, 
    setToggleHide(state, bool){
     // console.log(bool)
      state.toggleHideV = bool
    },

    setListInfo(state,{list,index}){
      state.listInfo.songs = list
      state.listInfo.songIndex = index
    //state.listInfo.firstSongInfo = state.listInfo.songs[state.listInfo.songIndex]
    },
    // getSong(state,hash){
    //   // state.firstSongInfo = state.listInfo.songs.filter((item.index.self)=>{
    //   //   return 
    //   // })
    // }
    setHeadTitle(state, rankname){
      state.head.title = rankname

    },
    setHeadNavHide(state, bool){
      state.head.toggle = bool;
    }
    
  },
  actions:{
    //点击单首歌曲  请求后端获取到数据  和更改数据
    getSong({commit, state}, info){
     
      // axios.get(`/proxy/app/i/krc.php?cmd=100&keyword=${info.songname}&${info.hash}`).then(({data})=>{
        axios.get(`/proxy/api/v1/song/get_song_info?cmd=playInfo&hash=${info.hash}`).then(({data})=>{
          console.log('请求成功')
          console.log(data)
        //  data中 找到播放歌曲信息  需要用到的数据（默认状态 在state 的audio中定义了）
        const songUrl = data.url
        const imgUrl = data.imgUrl.replace('{size}','400')
        const	title = data.songName
        const singer = data.singerName
        const currentLength = 0
        const audio = {songUrl, imgUrl, title, singer, currentLength }
        commit('setAudio', {audio})
          
        
        
        

      })
    }

  }

})

export default store