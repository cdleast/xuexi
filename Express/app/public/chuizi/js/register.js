$(function(){
	$('.ng-scope-input>input').focus(function(){
		$(this).parent().addClass('focus-border');
		$(this).parent().siblings().css('display','block');
	}).blur(function(){
		$(this).parent().removeClass('focus-border');
		$(this).parent().siblings().css('display','none');
	});



	$('.duihao21').click(function(){
		if ($(this).css('color') == 'rgb(153, 153, 153)') {
			$(this).css({'color':'blue'});
		}else{
			$(this).css({'color':'#999'});
		}	
	});
});


// 判断手机号
$(function(){

	var regyx = /^[A-z0-9_]+@[0-9A-z-]+\.[A-z]+$/;
	var regsj = /^1[3456789][0-9]{9}$/;

	var regmm = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	var reg_yzm = /^\w{6}$/;

	// 手机号
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

	// 验证码
	$('.hqjd3').focusout(function(){
		var yzm = $(this).val();
		if (reg_yzm == '') {
			return false;
		}
		if (reg_yzm.test(yzm) || reg_yzm.test(yzm)) {

		}else{
			alert('验证码错误');
			return false;
		}

		$('.yzm-dxyzm').css({'opacity':'1'});
	});

	// 密码
	$('.hqjd2-1').focusout(function(){
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

	// 重复密码
	$('.hqjd2-2').focusout(function(){
		var mm = $(this).val();
		if (mm == '') {
			return false;
		}
		if (regmm.test(mm)) {

		}else{
			alert('密码错误');
			return false;
		}


		if (true) {}
		$('.ng-scope-btn a').css({'opacity':'1'});
	});


});


