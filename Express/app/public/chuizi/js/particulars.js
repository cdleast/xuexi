$(function(){

	// 选择框的边框
	$('.gray-box-l-ul li').on('click',function(){
		$(this).addClass('border-li').siblings().removeClass('border-li');
	});


	// 底部跟随高度变化固定
	var fixPosition = $('body').outerHeight(true)-$(window).height()-$('.footer').height();
	$(window).scroll(function(){
		if($(this).scrollTop() >= fixPosition){
			$('.fixed-footer').css({'position':'static'});
		} else {
			$('.fixed-footer').css({'position':'fixed','bottom':'0'});
		}
	});



	// 减号
	$('.shangpjy').click(function(){
		var jianhao = Math.floor($('.shangpsl').html());
		if (jianhao<=1) {
			alert('请至少选择一件商品');
			return;
		}
		$('.shangpsl').html(jianhao-1);
		zongji();
	});

	// 加号
	$('.shangpinjy').click(function(){
		var jiahao = Math.floor($('.shangpsl').html());
		$('.shangpsl').html(jiahao+1);
		zongji();
	});

	// 总价
	function zongji(){
		var zongji = Math.floor($('.shangpsl').html());
		$('.no-discount-price').html('￥'+ zongji * 299 + '.00');
	}
	zongji();
});







