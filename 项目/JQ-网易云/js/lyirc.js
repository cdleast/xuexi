function mainLyric(lyric) {
    //格式化歌词
    var lyrics = formatLyric(lyric);

    //创建歌词
    createLyric(lyrics);

    $("#lrcBox").find(".lrc").eq(0).addClass("current");


    //计算滚动距离
    var minHeight = $("#lrcContainer").height() / 2;
    var scrollTop = 0;
    // 遍历每一个段落距离顶部的距离
    $("#lrcBox").find(".lrc").each(function (i, p) {
        scrollTop = p.offsetTop <= minHeight ? 0 : p.offsetTop - minHeight;
        p.dataset.scrollTop = scrollTop;
    });

    $("#audio").on("timeupdate", function () {
        var this_ = this;
        $("#lrcBox").find(".lrc").each(function (i, p) {
            if (Math.abs(this_.currentTime - p.dataset.timepoint) < 1) {
                $(this).addClass("current").siblings().removeClass("current");
                scrollLyric(i, p.dataset.scrollTop);
            }
        })
    })

    var curLine = -1;
    function scrollLyric(i, scrollTop) {
        if (curLine != i) {
            $("#lrcContainer").stop(true).animate({ "scrollTop": scrollTop }, 300);
            curLine = i;
        }
    }
}

// 歌词函数
function createLyric(lyrics) {
    // 遍历歌词
    $.each(lyrics, function (i, lyric) {
        // 创建歌词段落
        var p = document.createElement("p");
        // 歌词段落内容
        p.innerHTML = lyric.lrcstr;
        // 添加class样式
        p.className = "lrc";

        // 歌词播放时间放到dataset中
        p.dataset.timepoint = lyric.timepoint;
        // 歌词行号放到dataset中
        p.dataset.line = i;

        // 插入歌词段落
        $("#lrcBox").append(p);
    });
}