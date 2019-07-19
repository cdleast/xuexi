# NPM
# https://www.npmjs.com/

npm -v 打印当前 npm 的版本号

npm init 初始化（帮我们生成一个 package.json）

npm init -y 表示下面的选项都用默认的

npm install 安装 package.json 文件里所有依赖的模块

npm install 模块名称

npm install 模块名称@版本号

npm install 模块名称 --save   下载模块式保存模块名称到 package.json 里


# CNPM
# npm install -g cnpm --registry=https://registry.npm.taobao.org


# package.json配置参数
{
  "name": "hello",  // 项目名称
  "version": "1.0.0",   // 版本号
  "description": "nei rong miao shu",   // 文件描述
  "main": "index.js",   // 入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "chendongliang",    // 作者
  "license": "ISC",
  "dependencies": { // 模块
    "ejs": "^2.6.1"
  }
}


# 模板引擎
# ejs
看 index.js 文件

# Express 框架
// 安装 Express 应用程序生成器
npm install express-generator -g
// -g 表示全局的意思

# 生成项目
express app --view="ejs"
简写：express app -e
cd app 
npm install   // 安装依赖
DEBUG=app:* npm start   // 启动


# Express 目录机构
--| package.json    应用的配置文件
--| app.js          项目的入口文件
--| routes          路由目录
--| --| index.js    前台路由
--| views/          视图（模板）文件夹
--| node_modules    应用依赖模块的文件夹
--| public/         公共的静态资源库
--| bin/            启动文件目录
--| --| www         项目的启动文件


# 把 Bootstrap 框架 整合到 Express
1、把 Bootstrap 放到 public 文件夹里

2、把 Bootstrap 里面的js、css单独拿出来，放到 public 文件夹下的js、css文件夹里

# 表单数据交互
### 写一个路由来接收 get 表单提交的数据
router.get('/getdata',function(req,res){
  // 用 get 方式提交的数据在 req.query 里
  console.log(req.query);
  res.send(req.query);
})

### 分配路由 post 提交的表单页面
router.get('/postdata',function(req,res){
  // 响应模板，并分配数据
  res.render('postdata'); // views(模板文件夹)下的postdata.ejs
})

### 写一个路由来接收 post 表单提交的数据
### post方法无法直接拿到数据，需要安装body-parser模块
router.post('/test',function(req,res){
  // 用 post 方式提交的数据在 req.body 里
  console.log(req.body);
  // res.send(req.body);
  res.send(req.body.username);
})


