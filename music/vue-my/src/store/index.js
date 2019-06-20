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
			currentLength: 0, //歌曲播放初始时间为0
			songLength: 0, // 歌曲长度
      currentFlag: false,
      
    },
    head: {
			toggle: false,
			title: '',
			style: {'background': 'rgba(43,162,251,0)'}
    },
    search: '搜索',
    
    //signIndex:0,
    toggleHideV:true,  //true为隐藏

    listenCount:0,  // 记录播放过几首歌曲  默认0开始
    showPlay:false, //播放详情 默认不显示
    audioLoadding: false,
    headNav:'head-nav1',// 默认导航显示第一个选项
    detailPlayerFlag: false, // 播放的歌曲是否显示  默认不显示
    //所有歌曲信息
    listInfo:{
      songs:[], //歌曲xinxi
      songIndex: '-1' , // 默认第一首歌曲索引
     // firstSongInfo:[],
    },
    isPlay: false,
    detailPlayerFlag:false ,//点击播放详情组件  默认不显示
    
    
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
    toggleHideV : state=>{ return state.toggleHideV},
    detailPlayerFlag : state=>{
      return state.detailPlayerFlag
    },
    isPlay: state => state.isPlay ,
    signIndex : state => state.signIndex,
    search: state =>state.search

  },
  mutations:{
    //用来更改 导航值
    changeHeadnav(state, val){
      //console.log(val)
      state.headNav = val

    },

    setAudio(state, {audio}){
      // if(!state.listenCount){
      //   //state.toggleHideV = true //首次进入应用时 不打开播放详情
      // }

      // state.listenCount ++

      state.audio = {...audio}
     // console.log('hahah',audio.songLength)
      
    }, 
    setToggleHide(state, bool){
     // console.log(bool)
      state.toggleHideV = bool
    },

    setListInfo(state,{list,index}){
      state.listInfo.songs = list
      state.listInfo.songIndex = index
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
    },
    showDetailPlayer(state, bool){
      state.detailPlayerFlag = bool

    },
    isPlay: (state, flag) => {
			state.isPlay = flag
    },
    signIndex:(state,index)=>{
      state.signIndex = index
    }
    
  },
  actions:{
    //点击单首歌曲  请求后端获取到数据  和更改数据
    getSong({commit, state}, info){
     
      // axios.get(`/proxy/app/i/krc.php?cmd=100&keyword=${info.songname}&${info.hash}`).then(({data})=>{
        axios.get(`/proxy/api/v1/song/get_song_info?cmd=playInfo&hash=${info.hash}`).then(({data})=>{
          console.log('store  getsong ()方法 ---请求成功')
          console.table('console.table',data)
        //  data中 找到播放歌曲信息  需要用到的数据（默认状态 在state 的audio中定义了）
        const songUrl = data.url
        const imgUrl = data.imgUrl.replace('{size}','400')
        const	title = data.songName
        const singer = data.singerName
        const currentLength = 0
        const songLength = data.timeLength ;
        const audio = {songUrl, imgUrl, title, singer, songLength, currentLength }
        commit('setAudio', {audio})

        // let index = info.index
        // let list = data
        // commit('setListInfo',{list,index})
      }).catch(
        res=>
         console.log('打印错误提示:',res)
          
        
        
      )
    },
    
    prev({dispatch, state}){
      let list = state.listInfo.songs
      let index = --state.listInfo.songIndex
      console.log('prev index初始赋值---' ,index)
      if(index == -1){
        index = list.length - 1 
        state.listInfo.songIndex = list.length - 1
      }

      let hash = list.filter((item,key,self)=>{
        console.log('prev---' ,key)
        return key == index
      })[0].hash


      
      let info = {index, hash}
      dispatch('getSong', info)
    },
    next({dispatch, state}, ){
      let list = state.listInfo.songs
      //这里有一个hash 报错  然后添加了state.listInfo.songIndex == '-1' 这个判断，
      // 因为初始状态的时候   没有歌曲数据 获取不到对应的hash值 
      if(state.listInfo.songIndex == '-1'){
         console.log(state.listInfo.songIndex)
         state.listInfo.songIndex = 0
      }else{
        let	index = ++state.listInfo.songIndex 
        console.log('next index初始赋值---' ,index)
        if(index == list.length ){
            index = 0 
            state.listInfo.songIndex = 0
        } 
        let hash = list.filter((item,key,self)=>{
          console.log('next---' ,key)
          return key == index
        })[0].hash
        console.log(hash)
        let info = {index, hash}
        dispatch('getSong', info)
      }
  },

  }

})

export default store