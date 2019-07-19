<template>
  <div class="alltopics">
    <!-- 父子组件传参 -->
    <ListTopics :topics="topics"></ListTopics>
		
		<infinite-loading @infinite="infiniteHandler" v-if="isLoadingShow"></infinite-loading>
  </div>
</template>

<script>
// 引入组件
import ListTopics from '@/components/topics/ListTopics'
// 引入取数据的模块
import {getTopicslist} from '@/getdata/index.js'
// 引入 axios 模块
import axios from 'axios'
// 引入滑动组件
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'alltopics',
  data() {
    return {
      // 创建一个空数组用来存储 话题列表 数据
      topics:[],
			// 设置个默认页数
			page:1,
      // 加载小图标是否显示
      isLoadingShow:true
    }
  },
  // 加载组件
  components:{
    ListTopics,
		InfiniteLoading
  },
  mounted(){
    getTopicslist({limit:10,page:this.page}).then((response) => {
        // 获取到的数据在 response 里面
        // console.log(response)

        // 把 ajax 获取到的数据传给 topics数组
        this.topics = response.data.data;
    })
  },
  methods: {
    infiniteHandler($state) {
			setTimeout(()=> {
        // 查数据
        getTopicslist({limit:5,page: ++(this.page)}).then((response) => {   
            // 把 ajax 获取到的数据传给 topics 数组  
            // 把新的数组和原数组合并
            this.topics = this.topics.concat(response.data.data);
						if (response.data.data.length.length==0) {
							this.isLoadingShow = false;
						} else{
              $state.loaded();
            }
        },1000);
        
      })
    },
  },
}
</script>


<style scoped lang="scss">

</style>
