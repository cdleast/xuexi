<template>
  <div class="JobTopics">
    <!-- 父子组件传参 -->
    <ListTopics :topics="topics"></ListTopics>
  </div>
</template>

<script>
// 引入组件
import ListTopics from '@/components/topics/ListTopics'
// 引入取数据的模块
import {getTopicslist} from '@/getdata/index.js'

export default {
  name: 'JobTopics',
  data() {
    return {
      // 创建一个空数组用来存储 话题列表 数据
      topics:[]
    }
  },
  // 加载组件
  components:{
    ListTopics,
    
  },
  mounted(){
    getTopicslist({limit:20,tab:'job'}).then((response) => {
        // 获取到的数据在 response 里面
        // console.log(response)

        // 把 ajax 获取到的数据传给 topics数组
        this.topics = response.data.data;
    })
  }
}
</script>


<style scoped lang="scss">

</style>
