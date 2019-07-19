# vue
    https://vuejs.org/
    https://cn.vuejs.org/
    js 框架

    数据双向绑定


## vue 实例
    注意：不能使用 页面的 body 和 html 标签做为 vue 容器

    <div id="box">
        <!-- 算术运算 -->
        <h1>{{1+2}}</h1>
        <!-- 输出变量 -->
        <h2>{{message}}</h2>
        <!-- 输出字符串 -->
        <h2>{{'message'}}</h2>
    </div>


    // 实例化 vue 对象
    new Vue({
        // 选择容器
        el: '#box',
        data:{
            message:"hello Vue"
        }
    });



## 在模版
    {{  js 表达式  }}

## 指令
    v-model    绑定数据

    v-text
    v-html     
        区别  v-html 可以解析 html 的标签
    {{可以在这里直接输出变量名}}

    v-for
        <tr v-for="(item,i) in users">
            <td>{{i}}</td>
            <td>{{item.username}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
        </tr>

    v-bind 绑定属性
        <tagName v-bind:属性名称="属性的值">

        简写模式
        <tagName :属性名称="属性的值">

    v-on 绑定事件
        简写模式：
        <button @click="事件处理程序">按钮</button>


    class 相关的操作


    style 相关的操作


    显示和隐藏相关的指令
        v-if    
        v-show
            区别：
                v-if 通过给容器 添加注释的方式 做到容器的显示和隐藏
                v-show  通过改变 容器 css 的 display 属性 的 node 和 block 来做到容器的显示和隐藏


### 计算属性
    // 实例化 vue 对象
    new Vue({
        // 选择容器
        el:'#container',
        // 数据
        data:{
            pic:0,
            num:0
        },
        // 计算属性
        computed:{
            res:function(){
                return this.pic*this.num; 
            }
        }

    });


## 监听变量



# 今日大纲

## 过渡
    css
        /* 进入前的状态 */
        .fade-enter{
            opacity: 0;
            font-size: 14px;
        }

        /* 进入结束的状态 */
        .fade-enter-active{
            transition: all 5s;
        }

        /* 离开前的状态 */
        .fade-leave-to{

        }

        /* 离开结束状态 */
        .fade-leave-active {
            font-size: 14px; 
            transition: all 5s;
        }
    
    html
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>

### Animate.css   一个牛逼的 css 动画库

## 组件
    组件化的开发
    由 html   css   js  组成的一个 功能

    // 全局组件
    Vue.component('my-nav', {
        template: '<div class="nav"><ul><li><a href="">首页</a></li><li><a href="">欧美</a></li><li><a href="">日韩</a></li><li><a href="">大陆</a></li><li><a href="">动漫</a></li><li><a href="">迅雷下载</a></li></ul></div>'
    })

    在vue 容器里使用组件
    <my-nav></my-nav>

    注意：组件 不能 使用 html 原有的标签名 作为组件的名称 
          组件 必须只能有 一个 顶级容器
          局部组件 的名称 不能用 驼峰命名法


## 组件模版
### html
<!-- 组件的模版 -->
<template id="my-nav">
    <div class="nav">
        <ul>
            <li>
                <a href="">首页</a>
            </li>
            <li>
                <a href="">欧美</a>
            </li>
            <li>
                <a href="">日韩</a>
            </li>
            <li>
                <a href="">大陆</a>
            </li>
            <li>
                <a href="">动漫</a>
            </li>
            <li>
                <a href="">迅雷下载</a>
            </li>
            <li>
                <a href="">BT下载</a>
            </li>
            <li>
                <a href="">{{str}}</a>
            </li>
        </ul>
    </div>
</template>  
  
### js 部分
    // 组件 必须只能有 一个 顶级容器
    Vue.component('my-nav', {
        template: '#my-nav',
        // 组件里的数据可以在这里设置
        data:function(){
            return {
                str:'哈哈',
            }
        }
    })   

## 路由  vue-router  安装
    cnpm install vue-router --save

<!-- <router-link>默认会被渲染成一个<a>标签 -->
<router-link to="/foo">Go to Foo</router-link>
<!-- 如果不想渲染成<a>标签，需要加上tag="你想要渲染的标签" -->
<router-link to="/" tag="span">首页</router-link>

```
// 实例化vue对象
new Vue({
    // 选择容器
    el: '#container',
    // 数据
    data: {
        message: 'hello world'
    },
    // 实例化路由
    router: new VueRouter({
        routes =[
            { path: '/', component: { template: '<h1>首页</h1>' } },
            { path: '/cat', component: { template: '<h1>商城</h1>' } },
            { path: '/bbs', component: { template: '<h1>论坛</h1>' } },
            { path: '/me', component: { template: '<h1>我们</h1>' } },
        ]
    })
})
```

## 二级路由
### html部分
<!-- 首页组件模板 -->
<template id="index">
    <div class="nav">
        <ul>
            <li><a href="">首页</a></li>
            <li><a href="">欧美</a></li>
            <li><a href="">日韩</a></li>
            <li><a href="">大陆</a></li>
            <li><a href="">动漫</a></li>
            <li><a href="">动画</a></li>
            <li><a href="">下载</a></li>
        </ul>
    </div>
</template>

### js部分
```
// 实例化路由
router: new VueRouter({
    routes: [
        {
            path: '/', component: { template: '#index' }
        },
        {
            path: '/cat', component: { template: '#cat' },
            // 子路由-二级路由
            children: [
                {
                    path: '/cat/',
                    component: {template:'<h1>电子数码</h1>'}
                },
                {
                    path: '/cat/meirong',
                    component: {template:'<h1>美容化妆</h1>'}
                },
                {
                    path: '/cat/chengren',
                    component: {template:'<h1>成人用品</h1>'}
                },
                {
                    path: '/cat/baoli',
                    component: {template:'<h1>暴力美学</h1>'}
                }
            ]
        },
        {
            path: '/bbs', component: { template: '<h1>论坛</h1>' }
        },
        {
            path: '/me', component: { template: '<h1>我们</h1>' }
        },
    ]
})
```