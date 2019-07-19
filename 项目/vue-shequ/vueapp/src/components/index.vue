<template>
  <div class="index">
    <!-- 导航 -->
    <nav class="top">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <router-link to="/">全部</router-link>
            </div>
            <div class="swiper-slide">
                <router-link to="/index/GoodTopics">精华</router-link>
            </div>
            <div class="swiper-slide">
                <router-link to="/index/Weex">weex</router-link>
            </div>
            <div class="swiper-slide">
                <router-link to="/index/Share">分享</router-link>
            </div>
            <div class="swiper-slide">
                <router-link to="/index/Ask">问答</router-link>
            </div>
            <div class="swiper-slide">
                <router-link to="/index/JobTopics">招聘</router-link>
            </div>
        </div>
      </div>
    </nav>

    <!-- 因为nav.top用的是固定定位，所以会把子路由的内容覆盖着，所以加个margin -->
	<!-- <div class="mt10Box"></div> -->

	<!-- 配置子路由 -->
	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Index",
	//钩子函数   
	mounted() {
		// 自己写的 js 必须写在这里，要不无效
		var swiper = new Swiper(".swiper-container", {
			slidesPerView: 7
		});
	}
};
</script>


<style scoped lang="scss">
/* 加载样式重置表 */
@import "../assets/css/reset.css";

// 加载公共的 css 样式
@import "../assets/css/base.scss";

// 顶部导航
nav.top{
	position: fixed;
	top: rem(100px);
	left:0;
	width: 100%;
	height: rem(60px);
	background: #09c;
	.swiper-container{
		width: 95%;
		margin: 0 auto;
		a{
			color:#fff;
			line-height: rem(60px);
			font-size: rem(30px);
			text-align: center;
		}
	}
}
.mt10Box{
	width: 100%;
	height: rem(60px);
}

/* 组件样式 */
</style>
