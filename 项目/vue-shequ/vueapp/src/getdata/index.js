// 引入 axios 模块
import axios from 'axios'

// 创建 axios 实例
var $http = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1/',
    headers: {'X-Custom-Header': 'foobar'}
});


// 获取主题列表数据
function getTopicslist(params){

    // 默认参数的设置
    var newParms = Object.assign({
        limit:20,
        // 不写默认取全部
        // tab:'good'
    },params)



    // 配置参数
    return $http({
        method:'get',
        url:'/topics',
        params:newParms
    })

    /*
    axios({
        method:'get',
        url:'https://www.vue-js.com/api/v1/topics',
        // 传的参数
        params:{
        // 每一页的主题数量
        limit:20
    }
    })
    */

}


// 获取主题详情页
function getTopicsShow(topicsId){
    return $http.get('/topic/' + topicsId)
}







// 对外暴露
export {
    getTopicslist,
    getTopicsShow
}
