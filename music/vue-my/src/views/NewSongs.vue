<template>
	<div style="background:red, padding-top:500px; margin-top:100px;" >
		我是新歌组件
		<mt-swipe :auto="5000">
			<mt-swipe-item v-for = "(banner, index) in banner" :key = 'index'>
				<a :href = "banner.extra.tourl" :title = "banner.title">
					<img :src = "banner.imgurl" :title = "banner.title">
				</a>
			</mt-swipe-item>
		</mt-swipe>
		<!-- @click.native = "playAudio(index)" -->
		<mt-cell v-for = "(songs, index) in songs" :key = "index" :title="songs.filename"
		@click.native="playAudio(index)"
		>
			<!-- <span>icon 是图片</span> -->
			<img src="../assets/images/download_icon.png" width="20" height="20">
		</mt-cell>
	</div>
</template>

<script>
	//import { PLAY_AUDIO } from '../mixins'  // 在需要的文件导入
	export default{
		//混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。 所以混入对象中可以使用组件在中的数据
		//mixins: [PLAY_AUDIO], //  定义一个使用混入对象的组件
		data(){
			return {
				banner:[],
				songs:[],
			}
		},
		
		
		created() {
			//  调用组件中的函数前边要加上 this.  
			this.getnewsongsData()
		},
		methods: {
			getnewsongsData(){
				this.$http.get('/proxy/?json=true').then(({data})=>{
					//如果传一个{data} 对象的方式  是使用了 解构赋值  得到数据
					console.log('新歌请求得到的数据',data)
					this.banner = data.banner
					this.songs = data.data
				})
			},

			playAudio(index){
				console.log('NewSongs.vue  歌曲索引', index);
				//var songname = songname;
				//var hash = this.songs[index].hash
				


				var info = {
				list: this.songs,
				index: index  ,// 
				//songname: songname,
				hash: this.songs[index].hash,

				}
				console.table('console.table', info.list)
				console.log(info.list) //得到的是新歌列表的所有歌曲
				//console.log(hash)
				
				var infoNext = {
					list: this.songs,
					index: index+1  ,// 
					//songname: songname,
					hash: this.songs[index].hash
				}

				// 目的  更改vuex中 ListInfo 
				this.$store.commit('setListInfo', info)
				// 把点击的单首歌曲的hash 传递过去
				// this.$store.dispatch('getSong', hash)
				// 点击单首歌曲要发送请求 得到点击歌曲的信息  
				// 所以要用到dispath 触发vuex 中action中的一个异步函数，以获得歌曲信息 
				this.$store.dispatch('getSong',info)
				this.$store.commit('setToggleHide', false)
				this.$store.commit('isPlay', false)

				
				
			}
			
		}
	}
</script>
<style>
	.mint-swipe {
		height: 39vw !important;
	}
	
	.mint-swipe-indicator {
		width: 12px !important;
		height: 12px !important;
	}
	
	.mint-swipe-indicators {
		bottom: 5px !important;
	}
	.mint-cell-title {
    
    text-align: left;
}
</style>