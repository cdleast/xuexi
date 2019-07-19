<template>
	<div id="product-list-one">
		<h2>product-list-one</h2>
		<ul>
			<!-- <li v-for="product in products"> -->
			<!-- 这块遍历循环就不能再循环products，要循环新的数据saleProducts -->
			<li v-for="product in saleProducts">
				<span class="name">${{product.name}}</span>
				<span class="price">${{product.price}}</span>
			</li>
		</ul>
		<button @click="reducePrice(4)">商品降价</button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	export default{
		computed:{
			products(){
				return this.$store.state.products;
			},
			// saleProducts(){
			// 	return this.$store.getters.saleProducts;
			// }
			...mapGetters([
		      'saleProducts'
		    ])
		},
		methods:{
			...mapActions([
				"reducePrice"
			])

			// reducePrice:function(amount){
			// 	// 拿到数据，这杨写在严格模式下会报错
			// 	// this.$store.state.products.forEach((product) => {
			// 	// 	product.price -= 1;
			// 	// })
			// 	this.$store.dispatch("reducePrice1",amount);
			// }
		}





	}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}	
</style>