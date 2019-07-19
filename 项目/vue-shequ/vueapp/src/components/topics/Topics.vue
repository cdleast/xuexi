<template>
	<div class="Topics">
		<ul>
			<li>{{topicsData.title}}</li>
			<li v-html="topicsData.content"></li>
		</ul>
	</div>
</template>

<script>
// 引入取数据的模块
import {getTopicsShow} from '@/getdata/index.js'

export default{
	name:'Topics',
	data(){
		return {
			topicsData:[]
		}
	},
	mounted(){
		// 主题的id
		var topicsId = this.$route.params.id;
		getTopicsShow(topicsId).then((response) => {
			this.topicsData = response.data.data;
		})
	}
}
</script>

<style scoped>
	.Topics{
		margin-top: 200px;
	}
</style>