// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入http模块
import VueResource from 'vue-resource'

// 1、引入路由
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'


// 1、全局组件
// import Users from './components/Users'
// 2、全局组件注册
// Vue.component('users',Users);

Vue.config.productionTip = false

// 2、使用路由
Vue.use(VueRouter);
Vue.use(VueResource);

// 3、配置路由
const  router = new VueRouter({
	routes:[
		{path:'/',component:Home},
		{path:'/helloworld',component:HelloWorld},
	],
	// 去掉浏览器地址的#
	mode:"history"
})



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
