<!-- 1、模板: html结构 -->
<template>
	<header v-on:click="changeTitle">
		<h1>{{title1}} {{title}}</h1>
	</header>
</template>

<!-- 2、行为:处理逻辑 -->
<script>
	export default{
		name:"Header",
		data(){
			return {
				title1:"vue.js demo header "
			}
		},
		props:{
			title:{
				type: String
			}
		},
		methods:{
			changeTitle:function(){
				// this.title = "changed";
				// 注册一个事件
				this.$emit("titleChanged","子组件向父组件传值")
			}
		},
		// 生命周期
		// beforeCreate:function(){
		// 	alert("组件实例化之前执行的函数");
		// },
		// created:function(){
		// 	alert("组件实例化完毕，但页面还未显示");
		// },
		// beforeMount:function(){
		// 	alert("组件挂在前，页面仍未展示，但虚拟DOM已经配置");
		// },
		// mounted:function(){
		// 	alert("组件挂载后，此方法执行后，页面显示");
		// },
		// beforeUpdate:function(){
		// 	alert("组件更新前，页面仍未更新，但虚拟DOM已经配置")
		// },
		// updated:function(){
		// 	alert("组件更新，此方法执行后，页面显示");
		// },
		// beforeDestroy:function(){
		// 	alert("组件销毁前");
		// },
		// destoryed:function(){
		// 	alert("组件销毁");
		// }
	} 
</script>

<!-- 3、样式:解决样式 -->
<style scoped>
	header{
		background: lightblue;
		padding: 10px;
	}
	h1{
		color: #222;
		text-align: center;
	}
</style>