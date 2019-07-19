// 1. 引入模块 http
var http = require('http');

// 2. 创建服务
http.createServer(function(req, res) {
	// req  request   请求参数
    // res  response  响应的参数


    // 响应头信息
    // 200 服务状态码
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
    res.write('hello');
    res.write('jack');

    // 响应结束
    res.end();


    // 3000 是端口号
}).listen(3000)