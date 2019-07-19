<template>
  <div class="Weex">
    <ul class="items">
    	<li v-for="(item,index) in topics" :key="index">
  			<img v-bind:src="item.author.avatar_url" alt="">
        <!-- 绑定class如果是置顶的背景色变化 -->
  			<div class="tag" :class="{tagBg:item.top}">
          <!-- 判断获取的数据 -->
          <span v-if="item.top">置顶</span>
          <span v-else-if="item.good">精华</span>
          <span v-else>{{tab[item.tab]}}</span>
        </div>
  			<div class="title">{{item.title}}</div>
    	</li>
    </ul>
  </div>
</template>

<script>
// 引入取数据的模块
import {getTopicslist} from '@/getdata/index.js'

/*
  获取到的数据 tag 类型
  top:    Boolean    true:置顶    false:不置顶
  good:   Boolean    true:精华
  tab:    String
      good    精华
      weex    weex
      share   分享
      ask     问答
      job     招聘
*/

export default {
  name: 'Weex',
  // 数据
  data() {
    return {
      // 创建一个空数组用来存储 话题列表 数据
      topics:[],
      // 话题标签
      tab:{
        good: '精华',
        weex: 'weex',
        share: '分享',
        ask: '问答',
        job: '招聘'
      }
    }
  },
  mounted(){
    getTopicslist({limit:20,tab:'weex'}).then((response) => {
        // 获取到的数据在 response 里面
        // console.log(response)

        // 把 ajax 获取到的数据传给 topics数组
        this.topics = response.data.data;
    })
  }
}
</script>


<style scoped lang="scss">
/* 加载样式重置表 */
@import "../../assets/css/reset.css";

// 加载公共的 css 样式
@import "../../assets/css/base.scss";

.items{
	margin-top: rem(160px);
	width: 100%;
  li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: rem(100px);
    border-bottom: 1px solid #333;
    img{
      width: rem(60px);
      height: rem(60px);
      border-radius: rem(10px);
    }
    .tag{
      width: rem(65px);
      height: rem(40px);
      line-height: rem(40px);
      background: #e5e5e5;
      color: #a6a6a6;
      text-align: center;
      font-size: rem(20px);
      border-radius: rem(10px);
    }
    .title{
      width: rem(560px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .tagBg{
      background: #509030;
      color: #fff;
    }
  }
}
</style>
