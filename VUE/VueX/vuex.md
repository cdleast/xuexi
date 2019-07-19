# vuex 是什么
	主要应用于Vue.js中管理数据状态的一个库
	通过创建一个集中的数据存储，供程序中所以组件访问

### vuex 使用
```
// 1.引入 vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 2.使用 vuex
Vue.use(Vuex)

// 3.暴露 vuex 配置
export const store = new Vuex.Store({
	state:{
		products:[
	        {name:'马云',price:200},
	        {name:'马化腾',price:140},
	        {name:'马冬梅',price:20},
	        {name:'马蓉',price:10},
        ]
	}
})
```

### 使用 computed 获取 store 数据 main.js
```
// 4.引入store.js
import {store} from './store/store'

new Vue({
	// 5.使用vuex暴露的store
	store:store,
    el: '#app',
    render: h => h(App)
})

<!-- ProductListOne.vue,ProductListTwo.vue -->

<!-- app.vue 去掉v-bindv-bind -->
<product-list-one></product-list-one>
<product-list-two></product-list-two>
export default{
	computed:{
		products(){
			return this.$store.state.products;
		}
	}
}
```

### Vuex-Getters
```
<!-- store.js -->
getters: {
	// state 是把上面的数据传过去
	sale: (state) => {
	    // saleProducts 去接收准备改变的数据
	    var saleProducts = state.products.map((product) => {
	      return {
	        name: '**' + product.name + '**',
	        price: product.price / 2
	      }
	    })
	    // 把新的结果返回
	    return saleProducts;
	}
}


<!-- ProductListOne.vue,ProductListTwo.vue -->
computed:{
	products(){
		return this.$store.state.products;
	},
	saleProducts(){
		return this.$store.getters.sale;
	}
}
```

### Vuex-Mutations
```
// 触发事件改变数据的时候
<!-- main.js -->
mutations:{
	reducePrice: (state) => {
		state.products.forEach((product) => {
				product.price -= 1;
			})
	}
}

<!-- ProductListOne.vue,ProductListTwo.vue -->
methods:{
	reducePrice:function(){
		// 拿到数据，这杨写在严格模式下会报错
		// this.$store.state.products.forEach((product) => {
		// 	product.price -= 1;
		// })

		this.$store.commit('reducePrice');
	}
}

```

### es6支持...语法
cnpm install babel-preset-stage-2 --save-dev






