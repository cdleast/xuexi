<template>
	<div id="add-blog">
		<h2>添加博客</h2>
		<form v-if="!submmited">
			<label for="">博客标题</label>
			<input type="text" v-model="blog.title" required />

			<label for="">博客内容</label>
			<textarea v-model="blog.contant"></textarea>

			<div id="checkboxes">
				<label>
					Vue.js
					<input type="checkbox" name="Vue" value="Vue.js" v-model="blog.categories">
				</label>
		        
		        <label>
		        	Node.js
		        	<input type="checkbox" name="Node" value="Node.js" v-model="blog.categories">
		        </label>
		        
		        <label>
		        	React.js
		        	<input type="checkbox" name="React" value="React.js" v-model="blog.categories">
		        </label>
		        
		        <label>
		        	Angular.js
		        	<input type="checkbox" name="Angular" value="Angular.js" v-model="blog.categories">
		        </label>
		        
			</div>

			<label for="">作者</label>
			<select v-model="blog.author">
				<option v-for="author in authors" :key="author">
					{{author}}
				</option>
			</select>
			<!-- prevent 阻止刷新页面 -->
			<button v-on:click.prevent="post">添加博客</button>
		</form>

		<div v-if="submmited">
			<h1>您的博客发布成功</h1>
		</div>

		<div id="preview">
			<h3>博客总揽</h3>
			<p>博客标题:{{blog.title}}</p>
			<p>博客内容:</p>
			<p>{{blog.contant}}</p>
			<p>博客分类:</p>
			<ul>
				<li v-for="category in blog.categories" :key="category">
					{{category}}
				</li>
			</ul>
			<p>作者:{{blog.author}}</p>
		</div>
		
	</div>
</template>

<script>
	// import axios from 'axios'
	export default{
		name:'add-blog',
		data(){
			return {
				blog:{
					title:'',
					contant:'',
					// 分类数组,因为是可以选择多个
					categories:[],
					// 先给个空的，作者选择是就是谁
					author:"",
				},
				// 作者数组
				authors:["貂蝉","西施","王昭君","杨玉环"],
				submmited:false, // 你是否已经提交了这个事件
			}
		},
		methods:{
			post:function(){
				// var _this = this;
				this.$axios.post('https://wd0904140059zypnuu.wilddogio.com/posts.json',this.blog) // 直接把blog对象传到数据库
				.then((data) => {
					// console.log(data);
				  	// 点击提交按钮后，隐藏from表单
					this.submmited = true;
				})
				.catch((error) => {
					console.log('提交数据失败');
				})
			  	// 点击提交按钮后，隐藏from表单
				this.submmited = true;
			}
		}
	}
</script>

<style scoped>
#add-blog *{
	box-sizing:border-box;
}
#add-blog{
	margin:20px auto;
	max-width:600px;
	padding:20px;
}
label{
  display:block;
  margin:20px 0 10px;
}
input[type="text"],
textarea,
select{
  display:block;
  width:100%;
  padding:8px;
}
textarea{
	height:200px;
}
#checkboxes label{
	display: inline-block;
	margin-top:0;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
button{
	display: block;
	margin:20px 0;
	background:crimson;
	color:#fff;
	border:0;
	padding:14px;
	border-radius:4px;
	font-size:18px;
	cursor:pointer;
}
#preview{
	padding:10px 20px;
	border:1px dotted #ccc;
	margin:30px 0;
}
h3{
	margin-top:10px;
}
</style>
