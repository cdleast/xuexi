# 复习

## 选项卡
```

	// 给每一个标题绑定 click 事件	
	$('.tab ol li').click(function(){
		// 让所有的标题背景颜色初始化
		$('.tab ol li').css('background','#333');
		// 给当前点击的对象添加背景颜色为 green
		$(this).css('background','green');	
		// 先把所有的内容都隐藏
		$('.tab ul li').css('display','none');
		// 把当前点击标题所有对应的内容容器 显示
		$('.tab ul li').eq($(this).index()).css('display','block');
	});	

```

## 折叠筐


## 事件委托（事件委派）


## 动画


### 显示/隐藏
```
	show() 		// 显示
	hide() 		// 隐藏
	toggle()    // 切换
```

### 滑动
```
```


### 淡入/淡出
```
```

### 自定义动画


## 扩展作业
```
	预习 动画 里的 滑动  
	写一个 带 滑动效果的 折叠筐
```

