//引入 path 模块
var path = require('path');

// 模拟一个 url 的字符串
var url = 'http://www.baidu.com/home/list/index.html';

// 返回 path 目录
var dirname = path.dirname(url);
//	console.log(dirname);  // ==> http://www.baidu.com/home/list

var name = path.basename(url);
//  console.log(name)    // ==>  index.html

// 获取 path 里的扩展名称
var extname = path.extname(url);
console.log(extname);