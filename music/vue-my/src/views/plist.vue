<template>
	<div class="plist">
		我是歌单组件
		<mt-cell v-for = "(song,index) in songs" :key = "index"  is-link :title = "song.specialname"
		:label="String(song.playcount)"
		:to = "`/plist/info/${song.specialid}`" 
		>
		<!-- 正则 函数   用来替换的意思   就是把{size}  替换为 400 -->
			<img slot="icon" :src = "song.imgurl.replace('{size}', '400')"  width="60" height="60">
		</mt-cell>
	</div>
</template>

<script type="es6">
 export default {
	 data() {
		 return {
			 songs:[]
		 }
	 },
	 created(){
		 this.getSongsList()
	 },
	 methods: {
		 getSongsList(){
			 this.$http.get('/proxy/plist/index&json=true').then(({data})=>{
				console.log(data)
				this.songs = data.plist.list.info
			 })
		 }
	 },

 }
	
</script>
<style>
.mint-cell-title {
    padding-right: 10px;
    text-align: left;
}
</style>

