// 1. 引入模块 http
var http = require('http');

// 2. 创建服务
http.createServer(function(req, res) {
	// req  request   请求参数
    // res  response  响应的参数
    // 200  服务状态码

    if(req.url == '/admin'){
        // 响应头信息
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write('后台管理员的首页');
        // 响应结束
        res.end();
    }else if(req.url == '/'){
        // 响应头信息
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write('网站的首页');
        // 响应结束
        res.end();
    }else if(req.url =='/login'){
        // 响应头信息
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write('登录页面');
        // 响应结束
        res.end();
    }


    // 3000 是端口号
}).listen(3000)