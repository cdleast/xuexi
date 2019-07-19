<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝Pizza</h1>
                <h2>这里有你非常喜欢的Pizza</h2>
                <button @click='goToMenu' class="btn btn-success">Let's order!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    methods:{
        goToMenu:function(){
            // 跳转到上一次浏览的页面
            // this.$router.go(-1);

            // 指定跳转到的地址
            // this.$router.replace('/menu');

            // 指定跳转到路由的名字下
            // this.$router.replace({name:'menulink'});

            // 通过push进行跳转(常用)
            // this.$router.push('/menu');
            this.$router.push({name:'menulink'});
        }
    }
}
</script>

<style scoped>
  #home{
    background: url('../../src/assets/timg.png') no-repeat;
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .background{
    background: #eee;
    opacity: .8;
    max-width: 50vw;
    margin: 0 auto;
    padding: 20px 0;
  }




</style>
