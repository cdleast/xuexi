<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>

    <!-- router-view 复用 -->
    <!-- <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingouide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
// 引入局部组件
import Header from './components/Header'


export default {
  name: 'app',
  data () {
    return {

    }
  },
  // 2、注册局部组件
  components:{
    // 如果是驼峰的形式，不需要使用引号
    "app-header":Header,
  }
}
</script>

<style>

</style>
