<template>
	<div class="add container">
		<Alert v-if="alert" v-bind:message="alert"></Alert>
		<h1 class="page-header">添加用户</h1>
		<form v-on:submit="addCustomer">
			<div class="well">
				<h4>用户信息</h4>
				<div class="form-group">
					<label>姓名</label>
					<input type="text" class="form-control" placeholder="name" v-model="customer.name">
				</div>
				<div class="form-group">
					<label>电话</label>
					<input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
				</div>
				<div class="form-group">
					<label>邮箱</label>
					<input type="text" class="form-control" placeholder="email" v-model="customer.email">
				</div>
				<div class="form-group">
					<label>学历</label>
					<input type="text" class="form-control" placeholder="education" v-model="customer.education">
				</div>
				<div class="form-group">
					<label>毕业学校</label>
					<input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
				</div>
				<div class="form-group">
					<label>职业</label>
					<input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
				</div>
				<div class="form-group">
					<label>个人简介</label>
					<textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
				</div>
				<button type="submit" class="btn btn-primary">添加</button>
			</div>
		</form>
	</div>
</template>

<script>
	import Alert from './Alert'
	export default{
		name:'add',
		data(){
			return {
				customer:{},
				alert:''
			}
		},
		methods:{
			addCustomer(e){
				// 判断这三项不能为空
				if (!this.customer.name || !this.customer.phone || !this.customer.email) {
					this.alert = '请添加对应的信息';
				}else{
					// 拿到填写的数据，这样就不用写id了，因为当添加的时候，会自动给添加个ID
					let newCustomer = {
						name:this.customer.name,
						phone:this.customer.phone,
						email:this.customer.email,
						education:this.customer.education,
						graduationschool:this.customer.graduationschool,
						profession:this.customer.profession,
						profile:this.customer.profile
					}
					// 把填写的数据上传
					this.$axios.post('http://localhost:3000/users',newCustomer)
					.then((response) => {
						// 上传成功后跳转到主页
						this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}});
					})
				}
				// 阻止默认事件(其实就是刷新页面)
				e.preventDefault();
			}
		},
		components:{
			Alert
		}
	}
</script>

<style scoped>
	
</style>