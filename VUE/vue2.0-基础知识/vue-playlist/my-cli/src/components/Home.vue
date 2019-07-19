<!-- 1、模板: html结构 -->
<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <!-- 父组件像子组件传值 使用自定义属性v-bing:自定义属性值="值得数组"-->
    <users v-bind:users="users"></users>
    <!-- <users v-bind:users="users"></users> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 2、行为:处理逻辑 -->
<script>

// 1、引入局部组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'


export default {
  name: 'home',
  data () {
    return {
      // title:'这是我的第一个脚手架应用!',
      users:[

        ],
        title:"传递的是一个值,(number string boolean)"
    }
  },
  // 2、注册局部组件
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  methods:{
    updateTitle(title){
      this.title = title;
    }
  },
  // 页面加载之前拿到数据
  // 如果请求成功，会把数据传给data
  // console.log(data); 数据在 Response 下的 body 里
  // this.users是data()里的空数组
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
      this.users = data.body;
    }, response => {
      console.log("不好意思，没有拿到数据")
    });
  }
}
</script>

<!-- 3、样式:解决样式 -->
<style scoped>

</style>







