$(function () {
    // 定义变量,记录当前是第几首歌
    var curIndex = 0;
    // 是否拖动
    var isDrag = false;
    // 把jq对象转换成js对象
    var audio = $('#audio').get(0);
    $('.play').click(function () {
        // 判断audio的状态为暂停paused
        if (audio.paused) {
            audio.play();
            // $('#play').val('暂停');
            changePlayStyle('pause');
        } else {
            audio.pause();
            // $('#play').val('播放');
            changePlayStyle('play');
        }
    })

    // 上一首
    $('.backward').click(function () {
        var songTotals = localStorage.getItem("songTotals");
        curIndex = (curIndex - 1 < 0) ? songTotals - 1 : curIndex - 1
        playMusic(curIndex);
    })

    // 下一首
    $('.forward').click(function () {
        // 获取本地存储歌的数据,歌曲的总数
        var songTotals = localStorage.getItem("songTotals");
        // 三元运算符,判断当前是第几首,如果到9了,从0开始,否则加一,进行下一首
        curIndex = (curIndex + 1 >= songTotals) ? 0 : curIndex + 1
        // 播放当前index行的歌曲
        playMusic(curIndex);

    })

    // 双击播放,第二个参数tr加上后,当前this指向tr
    $('#infoList_playlist').on('dblclick', 'tr', function () {
        // 双击获得当前的索引号,赋值给curIndex,记录当前播放的是第几首歌,在dataset取出来的东西,默认为字符串,索引需要使用parseInt转换为数字
        curIndex = parseInt(this.dataset.index);
        // 调用播放函数,并传入索引
        playMusic(curIndex);
    })

    // 更新播放时间
    $('#audio').on('timeupdate', function () {
        // 判断,如果不拖动进度条,就按常规的方式播放
        if (!isDrag) {
            // 格式化歌曲已经播放的时间和总时间
            var currentTime = formatTime(this.currentTime);
            var duration = formatTime(this.duration);

            // 把格式好的时间放到页面上去
            $("#time_star").html(currentTime.I + ":" + currentTime.S);
            $("#time_end").html(duration.I + ":" + duration.S);

            // 转换进度条
            var prc = (this.currentTime / this.duration * 100).toFixed(2);

            $("#process_current").css("width", prc + "%");
        }
    })

    // 进度条拖拽
    $('#circle').on('mousedown', function (event) {
        // 歌曲时间默认为0
        var changeVal = 0;

        // 提取play_process视窗的位置的距离
        var play_processRect = $("#play_process").get(0).getBoundingClientRect();

        // 当前点击小圆点到进度条左侧的距离
        var disX = event.clientX - this.getBoundingClientRect().left;

        // 鼠标移动函数
        var moveArc = function (event) {
            // 拖动位置的百分比
            var prc = (((event.clientX - disX - play_processRect.left) / play_processRect.width) * 100).toFixed(2);
            prc = prc < 0 ? 0 : (prc > 100 ? 100 : prc);
            // 给当前播放进度条重新赋值宽度
            $("#process_current").width(prc + "%");

            // 判断拖动,拖动中
            isDrag = true;

            // 计算拖动歌曲的时间点
            changeVal = (audio.duration * prc / 100).toFixed(2);
            var changeTime = formatTime(changeVal);
            // 更新歌曲播放的时间
            $("#time_star").html(changeTime.I + ":" + changeTime.S);
        }

        // 鼠标弹起函数
        var upArc = function () {
            // 鼠标弹起时,清楚这两个事件
            $(document).off("mousemove", moveArc);
            $(document).off("mouseup", upArc);

            // 判断拖动,拖动结束
            isDrag = false;
            // 鼠标弹起后,更新播放时间
            audio.currentTime = changeVal;
        }

        // 鼠标移动和鼠标弹起事件
        $(document).on("mousemove", moveArc);
        $(document).on("mouseup", upArc);
    })

    // 当一首歌播完之后,自动播放下一首
    $("#audio").on("ended", function () {
        var songTotals = localStorage.getItem("songTotals");
        // 重新赋值下一首的索引
        curIndex = curIndex + 1;
        // 判断最后一首播完之后,暂停
        if (curIndex > songTotals) {
            audio.pause();
            changePlayStyle('pause');
        } else {
            playMusic(curIndex);
        }
    });

    // 歌曲播放,图片开始旋转
    $("#audio").on("play", function () {
        $("#bgDisc").css("animation-play-state", "running");
    });

    // 歌曲结束,图片停止旋转
    $("#audio").on("pause", function () {
        $("#bgDisc").css("animation-play-state", "paused");
    });

    // 缓冲条的更新
    setInterval(function () {
        // 判断缓冲就绪条件,根据播放开始还是暂停
        if (audio.readyState == 4) {
            // 取缓冲时间段
            var timeRanges = audio.buffered;
            // 取最后缓冲一个时间段的结束时间
            var lastTime = timeRanges.end(timeRanges.length - 1);
            // 总的时间
            var duration = audio.duration;

            // 转换时间格式
            var percent = (lastTime / duration * 100).toFixed(2);
            // 给缓冲条添加宽度
            $("#process_cache").css("width", percent + "%");
        }
    }, 1000)

    // 播放第N首歌
    function playMusic(index) {
        // 暂停当前播放
        audio.pause();
        changePlayStyle('play');

        // 找到所有行
        trs = $("#infoList_playlist").find("tr");
        // 找到某一行,根据index
        curTR = trs.get(index);

        // 把播放资源,赋值给audio
        $(audio).prop("src", curTR.dataset.mp3url);

        // 播放,并替换喇叭图表
        audio.play();
        changePlayStyle('pause');

        // 把当前所有的小喇叭去掉,并把数值索引,付给td
        $(trs).find("td.index").each(function (i, td) {
            $(td).html(td.dataset.num).removeClass("active");
        })

        $(curTR).find("td.index").html('<span class="iconfont icon-laba"></span>').addClass("active");
    }

    // 播放暂停状态函数
    function changePlayStyle(type) {
        var pauseHtml = '<i class="iconfont icon-play"></i>';
        var playHtml = '<i class="iconfont icon-zanting"></i>';
        // 三元运算符判断.play元素的类型是啥
        $(".play").html(type == 'play' ? pauseHtml : playHtml);
    }
})