// 引入 url 模块
var url = require('url');
// 模拟url 的字符串
var urlStr = 'http://www.baidu.com/index.php?name=jack&age=18';

// 格式化成对象的格式
var res = url.parse(urlStr);
// console.log(res);

var urlObj = {
    protocol: 'http:',
    host: 'www.bing.com',
    search: '?name=jack&age=18',
}

// 把 url 对象格式化成字符串
var resStr = url.format(urlObj);
console.log(resStr);