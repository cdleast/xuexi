// 1.引入 vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 2.使用 vuex
Vue.use(Vuex)

// 3.暴露 vuex 配置
export const store = new Vuex.Store({
	// 严格模式
	strict:true,
	// 存储我们的数据
  state: {
    products: [
      { name: '马云', price: 200 },
      { name: '马化腾', price: 140 },
      { name: '马冬梅', price: 20 },
      { name: '马蓉', price: 10 },
    ]
  },
  // 获取我们的数据
  getters: {
    // state 是把上面的数据传过去
    saleProducts: (state) => {
      // saleProducts 去接收准备改变的数据
      var saleProducts1 = state.products.map((product) => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
      // 把新的结果返回
      return saleProducts1;
    }
  },
  // 触发事件改变数据的时候
  mutations:{
  	reducePrice: (state,payload) => {
  		state.products.forEach((product) => {
					product.price -= payload;
				})
  	}
  },
  // Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。
  actions:{
    reducePrice:(context,payload) => {
      setTimeout(function(){
        context.commit("reducePrice",payload);
      },2000)
    }
  }
})
