<template>
	<div class="rank">
		我是rank组件
		<!-- :to = "{name:'rankinfo',params:{id: item.rankid}}"   自己熟悉的写法-- :to = "`/rank/info/${rank.rankid}`"-->
		<mt-cell v-for = "(rank,index) in ranklist" :key = "index"  is-link :title = "rank.rankname" 
		:to = "`/rank/info/${rank.rankid}`"
		>
		<!-- 正则 函数   用来替换的意思   就是把{size}  替换为 400 -->
			<img slot="icon" :src = "rank.imgurl.replace('{size}','400')"  width="100" height="100">
		</mt-cell>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				ranklist:[] //用来定义向后端请求后 得到的rank（排行）的数据
				
			}
		},
		
		created(){
			this.getRanklistData()
			
		},
		methods: {
			getRanklistData(){
				this.$http.get('/proxy/rank/list&json=true').then(({data})=>{
					console.log(data)
					this.ranklist = data.rank.list
					console.log(this.ranklist)
				})

			}
			
		}
	}
</script>
<style>
.mint-cell {
    text-align: left;
}
</style>



