//头部滑动判断
$(function(){
	//判断滚动条距离，切换头部显示栏
	var top = $('.header-fixed').offset().top;
	$(window).scroll(function(){
		//当滚动条距离大于header-fixed距离顶部的距离时，设置固定定位
		if($(this).scrollTop() > top){
			$('.header').hide();
			$('.header-fixed').css({'position':'fixed',
				'top':'0',
				'z-index':'99',
				'background':'#f9f9f9',
				'border-bottom':'1px solid #dadada',
				'box-shadow':'0 2px 4px rgba(0,0,0,.04)'
			});
			$('.header-hover-ul').show();
			//当滚动条距离小于于header-fixed距离顶部的距离时，设置相对定位
		}else{
			$('.header').show();
			$('.header-fixed').css({
				'position':'relative',
				'border-bottom':'0',
				'box-shadow':'none',
				'border-bottom':'none'
			});
			$('.header-hover-ul').hide();
		}
	});
});



// 导航栏点击变色
$(function(){
	$('.header-hover-l>li').click(function(){
		$('.header-hover-l>li>a').removeClass('abcd');
		$(this).children('a').addClass('abcd');
	})
});



// 导航鼠标滑入滑下
$(function(){
	$('.header-hover-l>li.123abc').hover(function() {
  		$('.sj-hovers').stop().slideDown(200);
 	}, function() {
  		$('.sj-hovers').stop().slideUp(100); 
 	});
 	$('.sj-hovers li a img').hover(function(){
 		$(this).animate({'transform':'translateY(-20px)'},1000)
 	});
});


// 轮播图
$(function(){
	// 1、默认显示 第 0 张图片
    var i = 0;
    // 2、自动播放定时器
    var autoPlayTimer;
    // 3、轮播自动播放的时间
    var autoPlayTime = 4000;
    // 4、找到第一张幻灯片
    var firstImg = $('.play-images li').first().clone();
    // 5、把第一张图片追加到幻灯片的最后一张位置 设置 $(.images) 对象的宽度
    $('.play-images').append(firstImg).width($('.play-images li').length * $('.play').width());
    // 下一张		
    $('.next').click(function() {
        i++;
        // 移动到指定的图片
        moveImg();
    });
    // 上一张
    $('.prev').click(function() {
        i--;
        // 移动到指定的图片
        moveImg();
    });
    // 点击轮播图 里的标记跳到指定的图片
    $('.bj li').click(function() {
        // 获取用户点击 bj 的索引号
        i = $(this).index();
        // 移动到指定的图片
        moveImg();
    });
    // 自动播放
    autoPlay();
    function autoPlay() {
        autoPlayTimer = setInterval(function() {
            i++;
            // 移动到指定的图片
            moveImg();
        }, autoPlayTime);
    }
    // 鼠标移入轮播图停止播放
    $('.play').mouseover(function() {
        // 清空自动播放的定时器
        clearInterval(autoPlayTimer);
        // 显示按钮
        // $('.prev,.next').show();
        // 鼠标移出轮播图开始播放
    }).mouseout(function() {
        // 执行自动播放的函数
        autoPlay();
        // 隐藏按钮
        // $('.prev,.next').hide();
    });
    // 移动到指定的图片
    function moveImg() {
        // 如果是最后一张图片点击下一张图片
        if (i == $('.play-images li').length) {
            // 把 图片列表的对象 left 设置 成 0
            $('.play-images').css({ left: 0 })
            // 修改当前索引	
            i = 1;
        }
        // 在第一张图片上点击上一张图片
        if (i == -1) {
            // 跳到克隆的那一个 图片
            $('.play-images').css({ left: -($('.play-images li').length - 1) * $('.play').width() });
            // 修改当前索引			
            i = $('.play-images li').length - 2;
        }
        // 切换图片的标记
        if (i == $('.play-images li').length - 1) {
            $('.bj li').removeClass('bg');
            $('.bj li').eq(0).addClass('bg');
        } else {
            $('.bj li').removeClass('bg');
            $('.bj li').eq(i).addClass('bg');
        }

        // 6、自动播放
        $('.play-images').animate({ left: -1220 * i }, 600);
    }
})

// 热门商品选项卡
$(function(){
	// 给每一个按钮绑定事件
	$('.hot-nav .next').click(function(){
		$('.xuanxiangka1').css({'display':"none"});
		$('.xuanxiangka').css({'display':"block"});
		$(this).css({'background-position':'-92px 0','cursor':'not-allowed'});
		$('.hot-nav .pre').css({'background-position':'0 0','cursor':'pointer'});
	});
	$('.hot-nav .pre').click(function(){
		$('.xuanxiangka').css({'display':"none"});
		$('.xuanxiangka1').css({'display':"block"});
		$(this).css({'background-position':'-46px 0','cursor':'not-allowed'});
		$('.hot-nav .next').css({'background-position':'-138px 0','cursor':'pointer'});
	});
});


// 切换语言
$(function(){
	var span1 = '<span class="iconfont icon-sanjiaoxing-up"></span>';

	$('.qiehuan-yy').click(function(){
		$('.qiehuan-yy1').css({'display':'block','top':'-52px'});
	});

	$('.qiehuan-yy1').click(function(){
		$(this).css({'display':'block','top':'0','background':'#f5f5f5'}).append(span1);
	});
});







