import Vue from 'vue'
// 根组件
import App from './App'
// 引入路由模块
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
