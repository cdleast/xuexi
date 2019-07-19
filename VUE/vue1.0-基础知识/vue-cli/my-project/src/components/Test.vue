<template>
  <div class="test">
    <h1>我是test组件</h1>
    <ul>
        <li>aaaaaaaaaaaaaa</li>
        <li>aaaaaaaaaaaaaa</li>
        <li>aaaaaaaaaaaaaa</li>
        <li>aaaaaaaaaaaaaa</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  font-weight: normal;
    span{
        color: red;
    }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: #42b983;
}
a {
  color: #42b983;
}
</style>
