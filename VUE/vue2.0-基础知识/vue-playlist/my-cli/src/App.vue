<!-- 1、模板: html结构 -->
<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">helloworld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 2、行为:处理逻辑 -->
<script>

// 1、引入局部组件



export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

<!-- 3、样式:解决样式 -->
<style scoped>

</style>







