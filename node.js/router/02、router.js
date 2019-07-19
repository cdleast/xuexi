// 1. 引入模块 http
var http = require('http');

// 引入 fs 模块
var fs = require('fs');

// 2. 创建服务
http.createServer(function(req,res){
    // req  request   请求参数
    // res  response  响应的参数
    // 200  服务状态码

    if(req.url == '/admin'){
        // 读取 html 文件
        fs.readFile('../html/admin.html',function(error,data){
           if(error){
               console.log('读取html 文件失败');
           }else{
                // 响应头信息
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                // 响应数据 并结束响应
                res.end(data);
           }
        });

    }else if(req.url == '/'){
        // 读取 html 文件
        fs.readFile('../html/index.html',function(error,data){
            if(error){
                console.log('读取html 文件失败');
            }else{
                 // 响应头信息
                 res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                 // 响应数据 并结束响应
                 res.end(data);
            }
         });

    }else if(req.url =='/login'){
        // 响应头信息
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write('登录页面');
        // 响应结束
        res.end();

    }else if(req.url=="/images/mv.jpg"){

        // 读取 文件
        fs.readFile('../images/mv.jpg',function(error,data){
            if(error){
                console.log('读取文件失败');
            }else{
                 // 响应头信息
                 res.writeHead(200,{"content-type":"image/jpg"});
                 // 响应数据 并结束响应
                 res.end(data);
            }
         });

    }else if(req.url == '/css/style.css'){

        // 读取 文件
        fs.readFile('../css/style.css',function(error,data){
            if(error){
                console.log('读取文件失败');
            }else{
                 // 响应头信息
                 res.writeHead(200,{"content-type":"text/css;charset=utf-8"});
                 // 响应数据 并结束响应
                 res.end(data);
            }
         });

    }else{
        // 响应头信息
        res.writeHead(404,{"content-type":"text/html;charset=utf-8"});
        res.write('404');
        // 响应结束
        res.end();        
    }

    // 3000 是端口号
}).listen(3000)
