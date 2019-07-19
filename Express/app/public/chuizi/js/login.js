$(function(){
	$('.hqjd').focus(function(){
		$(this).parent().addClass('focus-border');
	}).blur(function(){
		$(this).parent().removeClass('focus-border');
	});



	$('.duihao21').click(function(){
		if ($(this).css('color') == 'rgb(153, 153, 153)') {
			$(this).css({'color':'blue'});
		}else{
			$(this).css({'color':'#999'});
		}	
	});


	// 正则判断手机号邮箱
	
	var regyx = /^[A-z0-9_]+@[0-9A-z-]+\.[A-z]+$/;
	var regsj = /^1[3456789][0-9]{9}$/;

	var regmm = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	// var reg_yzm = /^\w{6}$/;

	var mm = $('.hqjd1').val();
		
	$('.hqjd1').focusout(function(){
		var sj = $(this).val();
		if (sj == '') {
			return false;
		}
		if (regsj.test(sj) || regyx.test(sj)) {

		}else{
			alert('手机号/邮箱错误');
			return false;
		}
	});

	$('.hqjd2').focusout(function(){
		var mm = $(this).val();
		if (mm == '') {
			return false;
		}
		if (regmm.test(mm)) {

		}else{
			alert('密码错误');
			return false;
		}
		$('.ng-scope-btn a').css({'opacity':'1'})
	});
	
});

