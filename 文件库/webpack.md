# webpack
> ### 概念：前端资源模块化管理和打包工具

## 下载
```
全局安装
npm install webpack -g

安装到环境依赖
npm install webpack --save-dev
```

## 下载
```
npm install webpack-dev-server -g
npm install webpack-dev-server --save-dev
```

npm install webpack-dev-server --save-dev

```
webpack 要打包的文件 打包后的文件
例：
    webpack 01.js  bundle.js

    webpack -v  查看版本
```

启动webpack 的服务器
webpack-dev-server 


## 配置文件
```
webpack.config.js 文件名不能改


module.exports = {
    // 生成source-map,方便浏览器调试
    devtool: "source-map",
    // 入口文件
    entry: './index.js',    

    // 输出文件路径和文件名 
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    // 服务器相关配置
    devServer: {
        contentBase: "./public",  //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true
    },
    module: {
        loaders: [

            // 解析CSS样式，将CSS样式写入到js中，加入到页面中(style-loader/css-loader)
            { test: /\.css$/, loader: "style-loader!css-loader" },
            
            // 解析很小的图片为base64(url-loader/file-loader)
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?limit=8192&name=./[name].[ext]?[hash]"
            },

            // 解析scss（需要style-loader/node-sass,下载不成功，使用cnpm下载）
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },

            // 解析ES6语法(babel-loader/babel-core)
            { test: /\.js$/, loader: "babel-loader" },

            // 解析vue文件内容（vue-loader,vue-style-loader,vue-template-compiler,babel-preset-es2015 babel-plugin-transform-object-rest-spread）
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                            css: 'vue-style-loader!css-loader'
                        }
                    }
                }],
            }
        ]
    }
}
```