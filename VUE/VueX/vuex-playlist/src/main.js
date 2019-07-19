import Vue from 'vue'
import App from './App.vue'
// 4.引入store.js
import {store} from './store/store'


new Vue({
	// 5.使用vuex暴露的store
	store:store,
    el: '#app',
    render: h => h(App)
})
