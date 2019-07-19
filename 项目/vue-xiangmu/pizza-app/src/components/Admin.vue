<template>
  <h1>Admin</h1>
</template>


<script>
	export default{
		data(){
			return {
				name:'Henry'
			}
		},
		// 进入到当前组件的时候，做的事
		// beforeRouteEnter:((to,from,next) => {
		// 	// 拿不到this的内容,因为beforeRouteEnter这个方法执行的时候，data还没有渲染完成
		// 	// alert("hello" + ' - ' + this.name);

		// 	// 可以用另一种方法,异步的方式
		// 	next(vm => {
		// 		// 这个方法执行完的时候，data已经渲染完毕
		// 		alert("hello " + vm.name);
		// 	})
		// })

		// 当你离开组件的时候，做的事
		// beforeRouteLeave:((to,from,next) => {
		// 	if (confirm("确定离开吗？") == true) {
		// 		next();
		// 	}else{
		// 		next(false);
		// 	}
		// })
		
	}
</script>
