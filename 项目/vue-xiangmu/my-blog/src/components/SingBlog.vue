<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.contant}}</article>
		<p>作者:{{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="category in blog.categories">
				{{category}}
			</li>
		</ul>
		<button @click="deleteSingBlog()">删除</button>
		<router-link :to="'/edit/' + id">编辑</router-link>
	</div>
</template>

<script>
	// import axios from 'axios'
	export default{
		name:"single-blog",
		data(){
			return {
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$axios.get("https://wd0904140059zypnuu.wilddogio.com/posts/" + this.id + '.json')
			.then((response) => {
				// console.log(response)
				return response.data;
			})
			.then((response) => {
				this.blog = response;
			})
		},
		methods:{
			// 删除博客
			deleteSingBlog(){
				this.$axios.delete("https://wd0904140059zypnuu.wilddogio.com/posts/" + this.id + '.json')
				.then((response) => {
					this.$router.push({path:'/'})
				})
			}
		}
	}
</script>

<style scoper>
	#single-blog{
		max-width:960px;
		margin:0 auto;
		padding:20px;
		background:#eee;
		border:1px solid #aaa;
	}
</style>


