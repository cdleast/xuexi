<template>
  <div id="app">
    <!-- 把products数组值传给两个组件 -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
// 引入组件
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'

export default {
  name: 'app',
  components:{
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo
  },
  data () {
    return {
      // products:[
      //   {name:'马云',price:200},
      //   {name:'马化腾',price:140},
      //   {name:'马冬梅',price:20},
      //   {name:'马蓉',price:10},
      // ]
    }
  }
}
</script>

<style scoped>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
