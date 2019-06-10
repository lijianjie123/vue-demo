<template>
  <div class="hello">
    
    <h2>HelloWorld</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
			return {
				banners: [],
				songList: []
			}
		},
		created(){
			// 创建完成的钩子函数  此时调用 methods中的  getSongs（） 方法     
			this.getSongs()
			console.log('组件对象钩子被调用')
		},
		methods: {
			getSongs(){
				
				// 使用axios  有些获取数据可能是这个套路  安装配置好axios  把函数写在methods 中   在钩子函数created 中调用   
				// 此时的方法中  成功后  的data 就是请求到的数据   然后把  数据  赋值到自己定义的  data对象中的  banners 和 songList 的数组中  
				this.$http.get('/proxy/?json=true').then(({data}) => {
					this.banners = data.banner
					this.songList = data.data
					console.log(this.banners)
					console.log(this.songList)
					
				}).catch(() => {
					console.log('err')
				})
			},
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
