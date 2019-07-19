# vue-cli

## cli (脚手架安装 vue 应用)
	1、全局安装 vue-cli
		$ npm install --global vue-cli

	2、创建一个基于 webpack 模板的新项目
		$ vue init webpack my-project

	3、安装依赖
		$ cd my-project

	4、运行项目
		$ npm run dev

# 项目的目录结构
	|build/					项目打包相关的配置目录

	|config/				开发环境的配置文件

	|node_modules/			项目所需要依赖的模块

	|src/					项目开发目录(源码)
	|--|assets/				静态资源目录(会被 webpack 编译)
	|--|components/			组件目录
	|--|router/				路由目录
	|--|router/index.js 	路由文件
	|--|app.vue				项目根组件
	|--|main.js				入口的 js 文件

	|static/				静态资源目录(不会被 webpack 编译--大文件)

	|index.html 			html文件





# cmd
```
vue init webpack my-project

? Project name my-project
? Project description A Vue.js project
? Author chendongliang <747439590@qq.com>
? Vue build runtime
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recom
mended) no

   vue-cli · Generated "my-project".

# Project initialization finished!
# ========================

To get started:

  cd my-project
  npm install (or if using yarn: yarn)
  npm run dev
```