$(function () {
    // 定义歌单参数
    var user = {
        "nick-name": "IT",
        "playlist": "157182977"
    }

    // 发送请求
    requestAPI({
        // 请求地址
        url: window.requestURL,
        // 请求参数
        data: {
            "API_type": "get_playlist_info",
            "queryString": {
                "id": user.playlist
            }
        },
        // 获取数据后进行的操作
        callback: function (data) {
            //回调函数
            initPlayList(data.result.tracks);
            refeshDOM();

            // 一共多少首歌
            var songTotals = data.result.tracks.length;
            // 把数据存储到本地的localStorage
            localStorage.setItem("songTotals", songTotals);
        }
    });

    function refeshDOM() {
        // 默认播放第一首歌
        var firstTR = $("#infoList_playlist").find("tr").get(0);
        $("#audio").prop("src", firstTR.dataset.mp3url);

        // 播放时替换序号为小喇叭,并变为红色
        $(firstTR).find("td.index").html('<span class="iconfont icon-laba"></span>').addClass('active');

        //初始化小窗口信息
        $("#albumPic").prop("src", firstTR.dataset.albumPic);
        $("#muiscName").html(firstTR.dataset.name);
        $("#artistName").html(firstTR.dataset.artistName);

        // 初始化右侧内容头部信息
        $("#infoPoster").prop("src", firstTR.dataset.albumPic);

        //初始化详情页信息
        $("#bgDisc").css("background-image", "url('" + firstTR.dataset.albumPic + "')");
        $("#bgBlur").css("background-image", "url('" + firstTR.dataset.albumPic + "')");
        $("#songname").html(firstTR.dataset.name);
        $("#albumname").html(firstTR.dataset.album);
        $("#singersname").html(firstTR.dataset.artistName);

        //发送获取歌词的请求
        requestAPI({
            url: window.requestURL,
            data: {
                "API_type": "get_music_lyric",
                "queryString": {
                    "id": firstTR.dataset.id
                }
            },
            callback: function (data) {
                //回调函数
                mainLyric(data.lrc.lyric);

            }
        });
    }

    // 初始化歌单
    function initPlayList(tracks) {
        var num, name, artists = [], album, time, artistName, tr;
        $(tracks).each(function (index, track) {
            // 三元运算符判断序号,让序号从1开始
            num = (index + 1 < 10) ? "0" + (index + 1) : index + 1;
            // 歌曲名称
            name = track.name;

            // 定义空数组,用来存储歌手名称
            artists = [];

            $(track.artists).each(function (index, artist) {
                // 把循环的歌手添加到数组中
                artists.push(artist.name);
            })
            // 歌手名字以 '/' 分割
            artistName = artists.join("/");

            // 专题信息
            album = track.album.name;

            // 歌曲时长
            time = formatTime(track.duration / 1000);

            // 创建tr行
            // tr = $('<tr></tr>').get(0);
            tr = document.createElement("tr");
            // 把歌曲的信息,绑定到对应的行上面
            tr.dataset.id = track.id;
            tr.dataset.index = index;
            tr.dataset.mp3url = "http://music.163.com/song/media/outer/url?id=" + track.id + ".mp3";
            tr.dataset.name = name;
            tr.dataset.artistName = artistName;
            tr.dataset.album = album;
            tr.dataset.albumPic = track.album.picUrl;

            tr.innerHTML = `
            <td class="index" data-num="${num}">${num}</td>
            <td>
                <span class="iconfont icon-xin"></span> &nbsp;&nbsp;
                <span class="iconfont icon-xiazai"></span>
            </td>
            <td>${name}</td>
            <td>${artistName}</td>
            <td>${album}</td>
            <td>${time.I}:${time.S}</td>
            `;
            // 插入
            $('#infoList_playlist').append(tr);
        })
    }

    // 详情页点击显示
    $("#poster").on("click", function () {
        $("#pageSongDetail").css({
            "top": "60px",
            "right": "0",
            "opacity": "1"
        });
    });

    // 详情页点击隐藏
    $("#btnCompressPlayBox").on("click", function () {
        $("#pageSongDetail").css({
            "top": "100%",
            "right": "100%",
            "opacity": "0"
        });
    })
})