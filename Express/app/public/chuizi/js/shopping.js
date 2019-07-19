$(function(){
	$('.gouxuan').click(function(){
		if ($(this).css('color') == 'rgb(102, 102, 102)') {
			$(this).css({'color':'blue'});
		}else{
			$(this).css({'color':'rgb(102, 102, 102)'});
		}
	});


	// 减号
	$('.jianhao').click(function(){
		var jianhao1 = Math.floor($('.shuliang').html());
		if (jianhao1<=1) {
			alert('请至少选择一件商品');
			return;
		}
		$('.shuliang').html(jianhao1-1);
		xiaoji();
		if (kaiguan == false ) {
			zongjia();
		}
	});


	// 加号
	$('.jiahao').click(function(){
		var jiahao1 = Math.floor($('.shuliang').html());
		$('.shuliang').html(jiahao1+1);
		xiaoji();
		if (kaiguan == false ) {
			zongjia();
		}
		// console.log(kaiguan);
	})

	// 小计
	function xiaoji(){
		// var xiaoji1 = Math.floor($('.xiaoji').html());
		var shuliang2 = Math.floor($('.shuliang').html());
		var jiage2 = Math.floor($('.jiage').html());
		var xiaoji2 = jiage2 * shuliang2;
		$('.xiaoji').html(xiaoji2);
	}
	xiaoji();
	
	// 总价
	function zongjia(){
		var zongjia2 = 0;
		for(var i =0;i< $('.xiaoji').length;i++){
			zongjia2 += parseInt($('.xiaoji').eq(i).html());
		}
		$('.zongjia').html(zongjia2)

	}
	zongjia();


	var kaiguan = true;
	$('.gouxuan1').click(function(){
		if (kaiguan === true) {
			zongjia();
			kaiguan = false;
		}else{
			var shshsh = Math.floor($('.zongjia').html()) - Math.floor($(this).siblings('.xiaoji-right').find('.xiaoji').html());
			$('.zongjia').html(shshsh)
			kaiguan = true;
		}
	});

	var kaiguan2 = false;
	// 全选
	$('.gouxuan2').click(function(){
		if (kaiguan2 === true) {
			kaiguan = true;

			
			kaiguan2 = false
		}else{
			
			kaiguan2 = true
		}


	});

});