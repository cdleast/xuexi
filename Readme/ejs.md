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










