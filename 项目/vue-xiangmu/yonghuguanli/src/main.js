import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'

Vue.prototype.$axios=axios;

// 引入组件
import Cusomers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.config.productionTip = false
// 使用路由
Vue.use(VueRouter);

// 设置路由
const router = new VueRouter({
	// 去掉浏览器中的#
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Cusomers},
		{path:'/about',component:About},
		{path:'/add',component:Add},
		{path:'/customer/:id',component:CustomerDetails},
		{path:'/edit/:id',component:Edit},
	]
})


new Vue({
  router,
  template: `
	<div id="app">
		<nav class="navbar navbar-default">
		  <div class="container">
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="#">用户管理系统</a>
		    </div>
		    <div id="navbar" class="collapse navbar-collapse">
		      <ul class="nav navbar-nav">
		        <li><router-link to="/">主页</router-link></li>
		        <li><router-link to="/about">关于</router-link></li>
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
		        <li><router-link to="/add">添加用户</router-link></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		<router-view></router-view>
	</div>
  `
}).$mount("#app")
