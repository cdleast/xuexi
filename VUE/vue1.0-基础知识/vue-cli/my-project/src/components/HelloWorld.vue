<template>
  <div class="hello">
    <h1>确认过眼神，是我想要等的人<span>哈哈哈哈</span></h1>
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
  name: 'HelloWorld',
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
