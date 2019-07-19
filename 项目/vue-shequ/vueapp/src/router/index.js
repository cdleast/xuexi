// 引入 vue 模块
import Vue from 'vue'
// 引入 vue 路由
import Router from 'vue-router'

// 一级组件
import index from '@/components/index'
import weixin from '@/components/weixin'
import me from '@/components/me'

// 二级组件
import Alltopics from '@/components/topics/Alltopics'
import GoodTopics from '@/components/topics/GoodTopics'
import JobTopics from '@/components/topics/JobTopics'
import Weex from '@/components/topics/Weex'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Topics from '@/components/topics/Topics'


Vue.use(Router)

export default new Router({
        routes: [{
            // 路径
            path: '/index',
            name: 'index',
            // 加载的组件
            component: index,
            // 配置子路由
            children: [
                {
                    path: '/',
                    name: 'Alltopics',
                    component: Alltopics,
                },
                {
                    path: '/index/GoodTopics',
                    name: 'GoodTopics',
                    component: GoodTopics,
                },
                {
                    path: '/index/JobTopics',
                    name: 'JobTopics',
                    component: JobTopics,
                },
                {
                    path: '/index/Weex',
                    name: 'Weex',
                    component: Weex
                },
                {
                    path: '/index/Share',
                    name: 'Share',
                    component: Share
                },
                {
                    path: '/index/Ask',
                    name: 'Ask',
                    component: Ask
                },
                {
                    path: '/index/Topics/:id',
					name: 'Topics',
					component: Topics
                }
            ]
        },
        {
          path: '/weixin',
          name: 'weixin',
          component: weixin
        },
        {
          path: '/me',
          name: 'me',
          component: me
        },
        {
            // 默认加载页面
            path:'/*',
            redirect:'/index'
        }
    ],
    // 去掉浏览器中的#
    mode:"history"

})
