module.exports = {
  //混入  
  //混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。
  // 所以混入对象中可以使用组件在中的数据
  'PLAY_AUDIO':{
    methods:{
      playAudio(index){
        var hash = this.songs[index].hash
        var info = {
          list: this.songs,
          index: index  // 
        }
        console.log(info.list) //得到的是新歌列表的所有歌曲
        // 目的  更改vuex中 ListInfo 
        this.$store.commit('setListInfo', info)
        // 把点击的单首歌曲的hash 传递过去
        this.$store.dispatch('getSong', hash)
      }
    }
  }
};
