// 测试函数
var tools = {
    test : function(){
        console.log("a");
    },
    demo : function(){
        console.log("b");
    }
}


// 1、封装函数方法，自动计算滚动条距离
function getScrollOffset(){
	if (window.pageXoffset) {
		return {
			x : window.pageXoffset,
			y : window.pageYOffset
		}
	}else{
		return {
			x : document.body.scrollLeft + document.documentElement.scrollLeft,
			y : document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}

// 2、封装函数，自动计算可视窗口尺寸
function getViewportOffset(){
    if (window.innerWidth) {
        return {
            w : window.innerWidth,
            y : window.innerHeight
        }
    }else {
        // compatMode是浏览器自带的一个属性，判断是怪异模式还是标准模式
        if (document.compatMode === "BackCompat") {
            return {
                x : document.body.clientWidth,
                y : document.body.clientHeight
            }
        }else {
            return {
                x : document.documentElement.clientWidth,
                y : document.documentElement.chientHeight
            }
        }
    }
}

// 3、封装函数，获取元素样式
function getStyle(elem, prop){
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    }else {
        return elem.currentStyle[prop];
    }
}

// 4、封装兼容性的绑定事件处理函数
function addEvent(elem,type,handle){
    if (elem.addEventListener) {
        elem.addEventListener(type,handle,false);
    }else if (elem.attachEvent) {
        elem.attachEvent('on' + type,function(){
            handle.call(elem);
        })
    }else {
        elem['on' + type] = handle;
    }
}

// 5、封装取消冒泡函数
function stopBubble(event){
    if (event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}

// 6、封装阻止默认事件函数
function cancelHandler(event){
    if (event.preventDefault) {
        event.preventDefault();
    }else {
        event.returnValue = false;
    }
}

// 7、封装一个函数，当需要异步加载script标签时使用
function loadScript(url,callback){
    var script = document.createElement("script");  // 创建
    script.type = "text/javascript";    // 设置
    if (script.readyState) {
        script.onreadystatechange = function(){
            if (script.readyState == "complete" || script.readyState == "loaded") {
                tools[callback]();
            }
        }
    }else {
        script.onload = function(){
            tools[callback]();
        }
    }
    script.src = url;   // 移到下面是因为让上面先绑定事件，在加载这个文件
    document.head.appendChild(script);  // 插入DOM
}

// 8、封装一个函数在个位数字前面加0
function getTwo(num){
    if(num < 10 && num >= 0){
        num = '0' + num;
    }
    return num;
}

