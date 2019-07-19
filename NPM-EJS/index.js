// 引入模块
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// 创建服务
http.createServer(function(req, res) {
    // req  request   请求参数
    // res  response  响应的参数

    // 路由分配
    if (req.url == '/') {
        // 读取文件
        fs.readFile('./html/index.html', function(error, data) {
            if (error) {
                console.log('文件读取失败');
            } else {
                // 响应数据
                // 响应头信息，200是状态码
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

                // 响应结束
                res.end(data);
            }
        })
    } else if (req.url == '/list') {
        fs.readFile('./html/list.html', function(error, data) {
            if (error) {
                console.log('文件读取失败');
            } else {
            	// 模拟列表页数据
            	var dataList = {
            		item:'爱情文章',
            		items:[
            			{title:'我爱你1',author:'黑心的JACK'},
            			{title:'我爱你2',author:'黑心的JACK'},
            			{title:'我爱你2',author:'黑心的JACK'},
            			{title:'我爱你3',author:'黑心的JACK'},
            			{title:'我爱你4',author:'黑心的JACK'},
            			{title:'我爱你5',author:'黑心的JACK'},
            			{title:'我爱你6',author:'黑心的JACK'},
            			{title:'我爱你7',author:'黑心的JACK'},
            			{title:'我爱你8',author:'黑心的JACK'},
            			{title:'我爱你9',author:'黑心的JACK'}
            		]
            	}

            	// 替换内容页模板里的数据(data.toString()是把index.html数据转换成字符串，artict是把 artict 对象 里的数据替换 字符串 里的数据)
                var html = ejs.render(data.toString(), dataList);


                // 响应数据
                // 响应头信息，200是状态码
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

                // 响应结束
                res.end(html);
            }
        })
    } else if (req.url == '/show') {
        fs.readFile('./html/show.html', function(error, data) {
            if (error) {
                console.log('文件读取失败');
            } else {
                // 模拟内容页的数据
                var artict = {
                    title: '明天上午上课',
                    author: 'jack',
                    content: '<p>明天上午上课</p><p>明天上午上课</p><p>明天上午上课</p><p>明天上午上课</p>'
                }

                // 替换内容页模板里的数据(data.toString()是把index.html数据转换成字符串，artict是把 artict 对象 里的数据替换 字符串 里的数据)
                var html = ejs.render(data.toString(), artict);

                // 响应数据
                // 响应头信息，200是状态码
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

                // 响应结束
                res.end(html);
            }
        })
    } else {
        fs.readFile('./html/404.html', function(error, data) {
            if (error) {
                console.log('文件读取失败');
            } else {
                // 响应数据
                // 响应头信息，200是状态码
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

                // 响应结束
                res.end(data);
            }
        })
    }

    // 3000 是端口号
}).listen(3000);