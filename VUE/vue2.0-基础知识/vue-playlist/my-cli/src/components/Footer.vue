<!-- 1、模板: html结构 -->
<template>
	<footer>
		<p>{{footer}} {{title}}</p>
	</footer>
</template>

<!-- 2、行为:处理逻辑 -->
<script>
	export default{
		name:"Footer",
		data(){
			return {
				footer:"vue.js demo footer"
			}
		},
		props:{
			title:{
				type: String
			}
		}
	}



</script>
<!-- 3、样式:解决样式 -->
<style scoped>
	footer{
		background: #222;
		padding: 10px;
	}
	p{
		color: lightblue;
		text-align: center;
	}
</style>