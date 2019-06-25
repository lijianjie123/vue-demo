<template>
  <div class="singer_list">
    <mt-cell 
    v-for = "item,index) in songs" 
    is-link 
    :key = "index" 
    :title = "item.singername"
		:to = "`/singer/info/${item.singerid}`">
		
			<img slot="icon" :src = "item.imgurl.replace('{size}', '400')" width="100" height="100">
		</mt-cell>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'
  export default{
    data(){
      return {
        songs:[],
      }
    },
    // created:{
    //   this.getsongs()
      
    // },
    beforeRouteEnter(to, from, next){
      next(
        vm=>{
          vm.getsongs()
          vm.$store.commit('setHeadNavHide', true)
          
        }
      )
    },
    beforeRouteLeave(to, from, next){
      next()
      this.$store.commit('setHeadNavHide', false)
    },
    methods:{
      getsongs(){
        console.log('hahah')
         var id = this.$route.params.id
         console.log('SingerList', id)
         this.$http.get(`/proxy/singer/list/${id}?json=true`).then(({data})=>{
            console.log('SingerList',data)
            this.songs = data.singers.list.info
            console.log(this.songs)
            var singerTitle = data.classname
            this.$store.commit('setHeadTitle', singerTitle)
         })
      }
    }

    
  }
</script>

<style>
	.singer_list .mint-cell-title img {
    margin-right: 10px
  }
</style>
