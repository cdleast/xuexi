#前端
    关心交互  数据的展示（页面）

#后端
    关心、数据、业务逻辑

## Node.js
    http://nodejs.cn/download/

## cmd 的基本命令
    window + r  打开运行窗口  
    输入 cmd 回车
    切换盘符  d: e:
    cd  进入目录
        . 当前目录
        .. 上级目录
    dir 查看目录下的所有文件
    cls  清屏
    exit 关闭cmd
    tab  补全
    上下键 来切换 输入的历史记录

## 安装 node.js
    在 cmd 输入 
    node -v  查看node.js 版本号
    node -h  查看帮助
    node     进入node.js 环境
    用node 执行文件
        node 文件的路径  

## node js 特点
    单线程
    非阻塞I/O
    事件驱动

## node.js 适合开发什么样的业务
    适合大量 I/O 的业务
    考试系统
    图文直播
    表单收集
    聊天室


##  模块
    node.js 用模块为单位来划分所有的功能,并提供了完善的模块加载机制

### http 模块
    // 1. 引入 http 模块
    var http = require('http');

    // 2. 创建 http 的服务
    http.createServer(function(req,res){
        /*
            req  request   请求参数
            res  response  响应的参数
        */ 
        // 响应头信息
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});

        // 响应数据
        res.write('<h1>Hello World</h1>')

        // 响应的结束
        // res.end('<h1>这是我的第一个Node.js 的页面</h1>');
        res.end();

    // 监听的端口号
    }).listen(3000)


### buffer  缓冲区
    toString() ***

# 今日大纲

## gitbash
    https://gitforwindows.org/

## lunux 的简单指令 （了解）
    ls  查看当前文件夹下的文件
        -l  详细信息
        -a  显示所有文件 包括隐藏文件
    
    cd  切换目录

    touch  创建空文件
    
    echo 创建带内容的文件
    echo "hello jack" > abc.txt

    mkdir  创建文件夹

    rmdir  删除空目录

    rm   删除文件
        -r  递归删除
        -f  强制删除

    cp  拷贝
        cp   file1  file2
    cat  查看文件


## fs 模块  文件模块

### 文件的操作
    // 创建文件
    fs.writeFile('test.txt','hello wrold',function(error){
        if(error){
            console.log('创建文件失败');
        }else{
            console.log('创建文件成功');
        }
    });    


    // 2. 查看文件信息
    fs.stat('test.txt',function(error,data){
        if(error){
            console.log('查看文件失败');
        }else{
            console.log(data);
        }
    })

    // 3. 读取文件内容
    fs.readFile('test.txt',function(error,data){
        if(error){
            console.log('读取文件失败');
        }else{
            console.log(data.toString());
        }
    })


    // 4. 删除文件
    fs.unlink('test.txt',function(error){
        if(error){
            console.log('删除文件失败');
        }else{
            console.log('删除文件成功');
        }
    })

    // 5. 在文件里追加内容
    fs.appendFile('test.txt',' ... hello jack',function(error){
        if(error){
            console.log('操作失败');
        }else{
            console.log('操作成功');
        }
    })


### 文件夹的操作
        // 6. 创建目录
    fs.mkdir('test',function(error){
        if(error){
            console.log('操作失败'); 
        }else{
            console.log('操作成功');  
        }
    })


    // 7. 删除目录
    fs.rmdir('test',function(error){
        if(error){
            console.log('操作失败'); 
        }else{
            console.log('操作成功');  
        }
    })

    // 8. 读取目录
    fs.readdir('test',function(error,data){
        if(error){
            console.log('读取失败'); 
        }else{
            console.log(data);  
        }        
    })

    // 9. 给目录重新命名
    fs.rename('test','abc',function(error){
        if(error){
            console.log('操作失败'); 
        }else{
            console.log('操作成功');  
        }
    })


# 路由
    // 1. 引入模块 http
    var http = require('http');

    // 引入 fs 模块
    var fs = require('fs');

    // 2. 创建服务
    http.createServer(function(req,res){

        if(req.url == '/admin'){
            // 读取 html 文件
            fs.readFile('./html/admin.html',function(error,data){
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
            fs.readFile('./html/index.html',function(error,data){
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
            fs.readFile('./images/mv.jpg',function(error,data){
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
            fs.readFile('./css/style.css',function(error,data){
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

    }).listen(3000)

# 预习  Express 框架
> http://www.expressjs.com.cn/

