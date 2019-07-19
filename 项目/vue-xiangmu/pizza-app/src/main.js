import Vue from 'vue'
// 1.引入路由模块
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'

// 2.使用路由模块
Vue.use(VueRouter);




// 5、实例化router
const router = new VueRouter({
  routes,
  // 去掉浏览器中的#
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
  	// return {x:0,y:100}
    // return {selector:'.btn'}
    if (savedPosition) {
      return sevedPosition;
    }else{
      return {x:0,y:0}
    }
  }
})

// // 全局守卫 to:要进入到哪一个路由，from:从哪一个理由离开，next:函数决定是否展示要看到的页面
// router.beforeEach((to,from,next) =>{
//   // alert('还没有登录，请先登录！');
//   // next();
//   // console.log(to);

//   // 判断store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   }else{
//     alert('还没有登录，请先登录！');
//     next('/login')
//   }
// })


// 后置钩子-功能与全局守卫类似，不常用
// router.afterEach((to,from) => {
//   alert('还没有登录，请先登录！')
// })


new Vue({
  el: '#app',
  // 6、使用路由
  router,
  render: h => h(App)
})
