# 过滤器-指令


# 自定义全局过滤器
```
<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>

// 自定义过滤器 value 其实就是拿到h2，blog.title 的数据
Vue.filter('to-uppercase',function(value){
	return value.toUpperCase(); // 所有h2变成大写
})
```

# 搜索
```
<div v-theme:column="'wide'" id="show-blogs">
	<h1>博客总揽</h1>
	// 绑定 v-model="search"
	<input type="text" v-model="search" placeholder="搜索">
	<div v-for="blog in blogs" class="single-blog">
		<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
		<article>
			{{blog.body | snippet}}
		</article>
	</div>
</div>

data(){
	return{
		blogs:[],
		search:"" // 定个空串
	}
}

computed:{
	filteredBlogs:function(){
		return this.blogs.filter((blog) => {
			return blog.title.match(this.search);
		});
	}
}


# 这时候就不能再遍历blogs，因为遍历blogs不会触发computed的里面的方法，应该遍历filteredBlogs，
当你遍历的内容搜索匹配上的话，就会只展示搜索匹配的结果，没有搜索匹配上的话，会把所有内容的展示出来
<div v-for="blog in filteredBlogs" class="single-blog"></div>
```

# 自定义局部过滤器
```
export default{
	name:'show-blogs',
	data(){
		return{
			blogs:[],
			search:""
		}
	},
	// 自定义局部过滤器
	filters:{
		// 第一种方法
		// "to-uppercase":function(value){
		// 	return value.toUpperCase();
		// }
		toUpperCase:function(value){
			return value.toUpperCase();
		}
	}
}
```

# 自定义全局指令

```
// rainbow是自定义指令的名字，不给参数和值
<h2 v-rainbow>{{blog.title}}</h2>

// main.js
// 自定义指令不给值
Vue.directive('rainbow',{
    // 钩子函数bind
	bind(el,binging,vnode){
		el.style.color = "red";
	}
})
```

```
// 自定义指令给参数column，给值wide
<div v-theme:column="'wide'" id="show-blogs"></div>

Vue.directive('theme',{
	bind(el,binging,vnode){
	    // 判断值是否为wide
		if (binging.value == 'wide') {
			el.style.maxWidth = "1260px";
		}else if (binging.value == 'narrow') {
			el.style.maxWidth = "560px";
		}
		
		// 判断绑没绑定参数column
		if (binging.arg == 'column') {
			el.style.background = "#6677cc";
			el.style.padding = '20px';
		}
	}
})
```

# 自定义局部指令
```
export default{
	name:'show-blogs',
	data(){
		return{
			blogs:[],
			search:""
		}
	},
	// 自定义局部指令
	directives:{
		'rainbow':{
			// 钩子函数bind
			bind(el,binging,vnode){
				el.style.color = "#" + Math.random().toString(16).slice(2,8);
			}
		}
	}
}
```

### 路由参数
```
<!-- 1.创建路由参数路径模板 -->
{path:'/blog/:id',component:SingBlog}





```


### 打包上传
```
npm run build  打包
找到dist文件夹下的index.html文件，修改/static 把/去掉
```

### 删除和编辑
```
<button @click="deleteSingBlog()">删除</button>
<router-link :to="'/edit/ + id'">编辑</router-link>

methods:{
	<!-- 删除博客 -->
	deleteSingBlog(){
		this.$axios.delete("https://wd0904140059zypnuu.wilddogio.com/posts/" + this.id + '.json')
		.then((response) => {
			this.$router.push({path:'/'})
		})
	}
}








```












