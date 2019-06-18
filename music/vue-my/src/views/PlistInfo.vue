<template>
	<div class="rank-info-content plist-info">
		<div class="rank-banner-wrap"
		     :style="{backgroundImage:`url(${imgurl})`}">
		</div>
		
		<!-- <div class="plist-desp container">
			<p class="plist-desp-p" >{{}}</p>
			<img src="../assets/images/close_icon.png" alt=""  class="plist-desp-icon" >
			<img src="../assets/images/open_icon.png" alt=""  class="plist-desp-icon" >
		</div> -->
		<div class="plist-desp-bottom" style="width: 100%;height: 5px;background-color: #f1f1f1"></div>
		
		<div class="rank-info-list">
			<mt-cell v-for="(item, index) in songs" :key = "index" :title = "item.filename" @click.native = "playAudio(index, item.filename)">
				
			</mt-cell>
		</div>
	</div>
</template>

<script>
	
	import { PLAY_AUDIO } from '../mixins'
	export default {
		mixins:[PLAY_AUDIO],
		data() {
			return {
				songs:[],
				imgurl:'',


				
			}
		},
		// created() {
		// 	this.getplist()
		// },
		// 使用组件钩子函数
		beforeRouteEnter (to, from, next) {
			// 进入组件的钩子函数需要 注意下  函数中不能使用 this，用vm 代替this 
			// 而且需要执行 next()

			// 不！能！获取组件实例 `this`
    		// 因为当守卫执行前，组件实例还没被创建
			// 通过 `vm` 访问组件实例
			// 官网这么写
			next(
				vm=>{
					vm.getplist()
				}
			)
		},
		// 进入的时候 提交了 setHeadNavHide 函数 离开的时候修改 回来
		beforeRouteLeave (to, from, next) {
			next()
			this.$store.commit('setHeadNavHide', false)
			
		},


		methods: {
			getplist(){
				
				let plistId = this.$route.params.id
				this.$http.get(`/proxy/plist/list/${plistId}?json=true`).then(({data})=>{
					console.log('plistinfo 请求的数据' , data)
					this.songs = data.list.list.info
					this.imgurl = data.info.list.imgurl.replace('{size}',400)
					console.log(this.songs)
					const plistinfotitle = data.info.list.specialname
					this.$store.commit('setHeadNavHide', true)
					this.$store.commit('setHeadTitle', plistinfotitle)
				})
			}
		},
	}
</script>

<style scoped>
	.rank-banner-wrap {
		height: 250px;
		background-size: 100%
	}
</style>

