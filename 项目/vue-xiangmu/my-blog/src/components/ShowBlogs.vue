<template>
	<!-- 自定义指令的使用 -->
	<div v-theme:column="'wide'" id="show-blogs">
		<h1>博客总揽</h1>
		<!-- 1.搜索框输入搜索内容 双向绑定search-->
		<input type="text" v-model="search" placeholder="搜索">

		<!-- 3.把从数据库拿到的数据遍历出来 -->
		<!-- 6.搜索遍历的时候这时候就不能再遍历blogs了，要遍历filteredBlogs，如果搜索的内容匹配上的话，就只会展示匹配的内容，如果没有匹配上的话，展示所有内容 -->
		<div v-for="blog in filteredBlogs" class="single-blog" :key="blog">
			<!-- 1.自定义过滤器实现通过标题进行搜索 -->
			<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
			<article>
				<!-- 自定义过滤器实现内容缩减，进入详情之后看到全部内容 -->
				{{blog.contant | snippet}}
			</article>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'show-blog',
		data() {
			return {
				// 1.定义一个空数组用来存储数据库的数据
				blogs: [],
				// 2.定义个空串，用来存储搜索框，用户在搜索框输入什么，这里就进去什么
				search: ""
			}
		},
		created() {
			// 2.从数据库拿取数据，并放到blogs中
			this.$axios.get('https://wd0904140059zypnuu.wilddogio.com/posts.json')
				.then((response) => {
					this.blogs = response.data;
				})
		},
		// 计算属性
		computed: {
			filteredBlogs: function() {
				// 3.过滤函数可以直接拿到blogs，因为blogs其实就是数据的数组
				return this.blogs.filter((blog) => {
					// 4.根据tltle，match是es6语法，把this.search(搜索框绑定的)传进去
					// 5.这块其实是返回的一个boolean,true就返回输入的内容，false就返回所有数据
					return blog.title.match(this.search);
				});
			}
		},
		// 局部自定义过滤器
		filters: {
			// 第一种方法
			// "to-uppercase":function(value){
			//  return value.toUpperCase();
			// },
			// 第二章写法es6
			toUppercase(value) {
				return value.toUpperCase();
			},
			"snippet": function(value) {
				// 截取100个字返回
				return value.slice(0, 100) + "...";
			}
		},
		// 局部自定义指令
		directives: {
			'rainbow': {
				// 钩子函数bind
				bind(el, binging, vnode) {
					el.style.color = "#" + Math.random().toString(16).slice(2, 8);
				}
			}
		}
	}
</script>

<style scoped>
	#show-blogs {
		max-width: 800px;
		margin: 0 auto;
	}

	.single-blog {
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #eee;
		border: 1px solid #aaa;
	}

	#show-blogs a {
		color: #444;
		text-decoration: none;
	}

	input[type="text"] {
		padding: 8px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
