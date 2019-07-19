// 4.引入主组件
import Home from './components/Home'
import Menu from './components/Menu'

import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'

// 引入二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 引入三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


// 3.配置路由模块
export const routes = [
  { path: '/', name: 'homelink', components: {
    // 默认显示组件页面
    default:Home,
    // 复用router-view组件
    'orderingouide':OrderingGuide,
    'history':History,
    'delivery':Delivery
  }},
  { path: '/menu', name: 'menulink', component: Menu },
  { path: '/admin', name: 'adminlink', component: Admin ,
    // 路由独享的守卫--就是单独的页面，不是全局的
    // beforeEnter:((to,from,next) => {
    //   next(false); // 弹窗过后，正常跳转到Admin页面,加参数false就不能正常跳转

    //   // 判断store.gettes.isLogin === false
    //   if (to.path == '/login' || to.path == '/register') {
    //     next();
    //   }else{
    //     alert('还没有登录，请先登录！');
    //     next('/login')
    //   }
    // })
  },  
  { path: '/about', name: 'aboutlink', redirect: '/about/history', component: About,
    // 二级路由
    children: [
      { path: '/about/contact', name: 'contactlink', redirect: '/about/contact/phone', component: Contact,
        // 三级路由
        children: [
          { path: 'phone', name: 'phoneNumber', component: Phone },
          { path: 'personname', name: 'personName', component: PersonName },
        ]
      },
      { path: '/about/delivery', name: 'deliverylink', component: Delivery },
      { path: '/about/history', name: 'historylink', component: History },
      { path: '/about/orderingouide', name: 'orderingguidelink', component: OrderingGuide },
    ]
  },

]