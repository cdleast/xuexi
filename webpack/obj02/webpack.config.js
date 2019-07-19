// webpack 的配置文件

module.exports = {
    // 生成source-map,方便浏览器调试
    devtool: "source-map",

    // 入口文件
    entry: './index.js',

    // 输出文件路径和文件名 
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // 编译时需要依赖的模块
    module: {
        loaders: [
            // 解析CSS样式，将CSS样式写入到js中，加入到页面中(style-loader/css-loader)
            { test: /\.css$/, loader: "style-loader!css-loader" },

            // 解析scss（需要style-loader/node-sass,下载不成功，使用cnpm下载）
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },

            // 解析很小的图片为base64(url-loader/file-loader)
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?limit=8192&name=./[name].[ext]?[hash]"
            },

        ]
    }
}