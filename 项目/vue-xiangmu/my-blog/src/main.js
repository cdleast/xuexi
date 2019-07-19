// 引入模块
import Vue from 'vue'
import App from './App'
// 1.axios 引入
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'
// 使用路由
Vue.use(VueRouter);

// 2.全局配置 axios 会自动引入 url
// axios.defaults.baseURL = 'https://wd0904140059zypnuu.wilddogio.com/'

// 3.使用 axios 模块
Vue.prototype.$axios=axios;

Vue.config.productionTip = false

// 自定义指令,不带参数
Vue.directive('rainbow',{
	bind(el,binging,vnode){
		el.style.color = "#" + Math.random().toString(16).slice(2,8);
	}
})
// 自定义指令,带参数
Vue.directive('theme',{
	bind(el,binging,vnode){
		if (binging.value == 'wide') {
			el.style.maxWidth = "1260px";
		}else if (binging.value == 'narrow') {
			el.style.maxWidth = "560px";
		}
		if (binging.arg == 'column') {
			el.style.background = "#6677cc";
			el.style.padding = '20px';
		}
	}
})

// 自定义过滤器
Vue.filter('to-uppercase',function(value){
	return value.toUpperCase();
})
Vue.filter('snippet',function(value){
	return value.slice(0,100) + '...';
})


// 创建配置路由
const router = new VueRouter({
	routes:Routes,
	// 去除浏览器中的#
	mode:'history'
})


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
