<!-- 1、模板: html结构 -->
<template>
	<div class="users">
		<h1>hello users</h1>
		<ul>
			<!-- v-on:click="user.show = !user.show" -->
			<li v-for="user in users">
				<h2>{{user.name}}</h2>
				 <!-- v-show="user.show" -->
				<h3>{{user.email}}</h3>
				<h4>{{user.username}}</h4>
			</li>
		</ul>

		<button v-on:click="deleteUser">删除</button>
	</div>
</template>

<!-- 
	传值：string number boolean
	引用：array object   ---  一个地方变化，其他地方都会变化
 -->


<!-- 2、行为:处理逻辑 -->
<script>
	export default {
		name:"Users",
		// 拿父组件传过来的值
		// props:["users"],
		props:{
			users:{
				// 传值类型
				type:Array,
				required:true
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			deleteUser:function(){
				this.users.pop();
			}
		}
	}
</script>

<!-- 3、样式:解决样式 -->
<style scoped>
.users{
	width: 100%;
	max-width: 1200px;
	margin: 20px auto;
	padding: 0 20px;
	box-sizing: border-box;
}
ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li{
	flex-grow: 1;
	flex-basis: 200px;
	text-align: center;
	padding: 10px;
	border: 1px solid #222;
	margin: 10px;
}
</style>