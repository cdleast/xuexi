Vue.component("greeting",{
	template: `
			<p>
				{{name}}：大家好，给大家介绍下我的女朋友!
				<button v-on:click="changeName">改名</button>
			</p>

			`
		,
	data:function(){
		return {
			name: "鹿晗"
		}
	},
	methods:{
		changeName:function(){
			this.name = "Henry"
		}
	}
})