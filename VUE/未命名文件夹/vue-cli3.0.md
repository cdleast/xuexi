# vue-cli-3.0 自定义脚手架
vue create vue-cli-new
cd vue-cli-new
npm run serve

# Finder 用户(chendongliang) .vuerc 文件
shift + command + .   显示隐藏文件
里面是保存的自己定义的cli脚手架模板配置信息

# vue-cli-3.0 新增安装插件的方式
vue add vuetify(vue的UI库)

# vue-cli-3.0 环境变量
.evn    // 非开发环境
.env.development    // 开发环境
.evn.production    // 生产环境
环境变量给错误的时候，会找到.evn里面的

# vue-cli-3.0 独立运行vue文件
安装组件 npm install -g @vue/cli-service-global
启动 vue serve Hello.vue(文件名)

# vue-cli-3.0 ui(图形管理工具)
任何路径下 vue ui

# vue-cli-3.0 配置路径
在根目录下，创建 vue.config.js 一定要是这个名字
module.exports = {
	baseUrl:'/', // 根路径
	outputDir:'dist', // 构建输出目录
	assetsDir:'assest', // 静态资源目录(js,css,img,fonts)
	lintOnSave:false, // 是否开启eslint保存检测，有效值:true || false || 'error'
}
终端:npm run bulid(生产环境打包)

# vue-cli-3.0 跨域请求
// 引入json
const goods = require('./data/goods.json');
const ratings = require('./data/ratings.json');
const seller = require('./data/seller.json');

module.exports = {
	baseUrl:'/', // 根路径
	outputDir:'dist', // 构建输出目录
	assetsDir:'assest', // 静态资源目录(js,css,img,fonts)
	lintOnSave:false, // 是否开启eslint保存检测，有效值:true || false || 'error'
	devServer:{
		open: true,  // 是否在npm run serve 自动打开浏览器
		host: 'localhost', // 本地主机名字
		port: 8080, // 端口号
		https: false, // 浏览器会给一些警告
		hotOnly: false, // 热模块更新
		proxy:{
			// 配置跨域
			'/api':{
				target:'http//localhost:5000/api/',
				ws:true, // 是否跨域
				changOrigin:true,
				pathRewrite:{
					'^/api':''  // 重新配置名字
				}
			}
		},
		before(app){
			// http://localhost:8080/api/goods
			app.get('/api/goods',(req,res) => {
				res.json(goods);
			});
			app.get('/api/ratings',(req,res) => {
				res.json(ratings);
			});
			app.get('/api/seller',(req,res) => {
				res.json(seller);
			});
		}
	}
}
















