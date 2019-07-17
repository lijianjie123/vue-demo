<template>
	<div class="rank-info-content">
		<div class="rank-banner-wrap"  :style="{backgroundImage:'url('+ imgurl + ')'}">
			<div class="rank-status container">
				<p>上次更新时间：{{getDay()}}</p>
			</div>
		</div>
		
		<div class="rank-info-list">
			<mt-cell v-for="(item,index) in songs" :title="item.filename"  :key="index" @click.native="playAudio(index, item.filename)">
				<span class="rank-index" :class="{'rank-list-good' : index<3, 'rank-list-first' : index==0, 'rank-list-second' : index==1, 'rank-list-third' : index==2}">{{index + 1}}</span>
				<img src="../assets/images/download_icon.png" width="20" height="20">
			</mt-cell>
		</div>
	</div>
</template>

<script>
import { PLAY_AUDIO } from '../mixins'  // 在需要的文件导入
export default{
	mixins:[PLAY_AUDIO],
	data(){
			return {
				imgurl: '',
				songs: [],
				updateTime: '',
				opacity: 0
			}
	},
	// 进入组件路由的时候  触发的函数  和调用方法 执行  使其得到数据
	beforeRouteEnter (to, from, next) {
		next(
			// 不！能！获取组件实例 `this`
    		// 因为当守卫执行前，组件实例还没被创建
			// 通过 `vm` 访问组件实例
			// 官网这么写
			vm=>{
				vm.getList()

			}
		)
	},
	// 离开的时候要把修改过的数据  改回去  
	beforeRouteLeave (to, from, next) {
		this.$store.commit('setHeadNavHide',false)
		next()	// ...
	},
	methods: {
		getList(){
			this.$store.commit('setHeadNavHide', true)
			var infoID = this.$route.params.id;
			this.$http.get(`/proxy/rank/info/?rankid=${infoID}&page=1&json=true`).then(({data})=>{
				console.log(data)
				const {info,songs} = data;
				const {banner7url,rankname} = info
				const {list} = songs
				this.imgurl = banner7url.replace('{size}','400')
				this.songs = list
				this.$store.commit('setHeadTitle',rankname)
				
			})
		},
		getDay(){
			var  myTime = new Date(); 
			var  iYear =  myTime.getFullYear();
			var  iMonth =  myTime.getMonth()+1;
			var  iDate =  myTime.getDate();

			var  iWeek =  myTime.getDay();//0 123456
			var  iHours =  myTime.getHours();
			var  iMin =  myTime.getMinutes();
			var  iSec =  myTime.getSeconds(); 
			return `${iYear}-${iMonth}-${iDate}`
		},
		
	},

}
	
	
</script>

<style scoped>
	.rank-list-good {
		display: inline-block;
		padding: 2px 8px;
		left: 12px !important;
		border-radius: 8px;
		color: #fff;
		margin-top: 3px !important;
	}
	
	.rank-list-first {
		background-color: #E80000;
	}
	
	.rank-list-second {
		background-color: #FF7200;
	}
	
	.rank-list-third {
		background-color: #F8B300;
	}

	.mint-cell-text {

    	float: left;
	}
</style>

