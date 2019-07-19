<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入局部组件
import AddBlog from './components/AddBlog'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  // 配置组件模板
  components: {
    'add-blog':AddBlog,
    'blog-header':BlogHeader
  }
}
</script>

<style scoped>
  
</style>
