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

    
    audioLoadding: false,
    headNav:'head-nav1',// 默认导航显示第一个选项
    detailPlayerFlag: false, // 播放的歌曲是否显示  默认不显示
    //默认状态单个歌曲信息
    listInfo:{
      songs:[], //所有歌曲
      songIndex:'0' , // 默认第一首歌曲索引
      firstSongInfo:[],
    },
    //firstSongInfo:[],
  },
  getters:{
    audio : state => state.audio,
    audioLoadding : state => state.audioLoadding,
    //firstSongInfo : state =>{ } 
    head: state=>state.head,
  },
  mutations:{
    //用来更改 导航值
    changeHeadnav(state, val){
      //console.log(val)
      state.headNav = val

    },
    setListInfo(state,{list,index}){
      state.listInfo.songs = list
      state.listInfo.songIndex = index
    state.listInfo.firstSongInfo = state.listInfo.songs[state.listInfo.songIndex]
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
        var list = {"fileHead":0,"q":0,
        "extra":{
          "320filesize":9830491,
        "sqfilesize":29386228,
        "sqhash":"C78F279DCC75869E66185197FE6B3BD5",
        "128hash":"B7F4EA4442B23B38155AD633075EB64D",
        "320hash":"D4D864C95FD01B68BBE8F7D00DB90A18",
        "128filesize":3932251
      },
      "fileSize":1001139,
      "choricSinger":"欢子",
      "album_img":"http:\/\/imge.kugou.com\/stdmusic\/{size}\/20190527\/20190527184910778959.jpg",
      "topic_remark":"",
      "url":"http:\/\/fs.open.kugou.com\/c68304a295c12bc2783b5f41f79c7492\/5cf8968f\/G151\/M06\/06\/01\/d5QEAFzrw5qIaIaIAA9GszihC5EAAAomQFu0pwAD0bL065.m4a",
      "time":1559796062,
      "trans_param":{"cid":70987909,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"display":0},"albumid":21552239,"singerName":"欢子","topic_url":"","extName":"m4a","songName":"我们不再是你我","singerHead":"","hash":"B7F4EA4442B23B38155AD633075EB64D","mvhash":"","store_type":"audio","error":"","imgUrl":"http:\/\/singerimg.kugou.com\/uploadpic\/softhead\/{size}\/20190416\/20190416143137984.jpg","album_audio_id":157366205,"area_code":"1","ctype":1009,"128privilege":8,"bitRate":32,"status":1,"stype":11323,"req_hash":"B7F4EA4442B23B38155AD633075EB64D","320privilege":10,"intro":"","singerId":1133,"privilege":8,"fileName":"欢子 - 我们不再是你我","errcode":0,"sqprivilege":10,"backup_url":["http:\/\/fs.open2.kugou.com\/201906061229\/eb82652418dd153a59d0c6a7797a3ea2\/G151\/M06\/06\/01\/d5QEAFzrw5qIaIaIAA9GszihC5EAAAomQFu0pwAD0bL065.m4a"],"timeLength":245}

        
        

      })
    }

  }

})

export default store