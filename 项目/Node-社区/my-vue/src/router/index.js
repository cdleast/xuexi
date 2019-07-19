import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Content from '@/pages/Content'
import jq from '@/pages/jq'
Vue.use(Router)
 
export default new Router({
　　routes: [
　　　　{
　　　　　　path: '/',
　　　　　　component: Index 
　　　　},
　　　　{
　　　　　　path: '/Content/:id',
　　　　　　component: Content
　　　　},
　　　　{
　　　　　　path: '/jq',
　　　　　　component: jq
　　　　}
　　]
})