import Vue from 'vue'
// 根组件
import App from './App'
// 引入路由模块
import router from './router'
// 引入懒加载模块
import vuelazyload from 'vue-lazyload'

// 配置懒加载模块
Vue.use(vuelazyload, {
  preLoad: 1.3,
	// 请求的地址出错的时候,就会加载error里的图片
  error: require('../static/images/vue.png'),
	// 正在请求的时候加载的图片
  loading: require('../static/images/loading.min.gif'),
  attempt: 1
})

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
