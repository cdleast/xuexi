<template>
    <div id="app">
        <div class="top">
            <img src="../static/images/vue.png">
            <div class="setTitle">Vue.js 中文社会</div>
        </div>

        <!-- 加载组件的试图 -->
        <router-view />
    

        <nav class="footer">
            <!-- 设置选中样式 第一种 三元运算符-->
            <ul>
                <router-link to="/" tag="li">
                    <span :class="resPath=='index'?'xColor':'defaultColor'">首页</span>
                </router-link>
                <router-link to="/weixin" tag="li">
                    <span :class="resPath=='weixin'?'xColor':'defaultColor'">微信公众号</span>
                </router-link>
                <router-link to="/me" tag="li">
                    <span :class="resPath=='me'?'xColor':'defaultColor'">关于我们</span>
                </router-link>
            </ul>
        </nav>


    </div>
</template>
<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    // 处理路径问题
    resPath:function(){
        var pathArr = this.$route.path.split('/');
        return pathArr[1]
    }
  }
}

</script>
<style scoped lang="scss">
/* 加载样式重置表 */
@import "./assets/css/reset.css";

/* 加载公共的 css 样式 */
@import "./assets/css/base.scss";


// 头部logo
.top{
    display: flex;
    position:fixed;
    top:0;
    left:0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: rem(100px);
    background: #315f36;
    img{
        width: rem(80px);
        height: rem(80px);
    }
    .setTitle{
         color:#fff;
         font-size: rem(50px);
         margin-left: rem(30px);
    }

}


// 底部导航
nav.footer{
    width: 100%;
    height: rem(80px);
    background: #333;
    position: fixed;
    left:0;
    bottom: 0;
    ul{
        display: flex;
        justify-content: space-around;
        li{
            color:#fff;
            line-height: rem(80px);
            font-size: rem(30px);
            font-weight: bolder;
        }
    }
    .defaultColor{
        color:#fff;
    }
    .xColor{
        color:red;
    }
    .router-link-active{
        color:red;
    }
}

</style>
