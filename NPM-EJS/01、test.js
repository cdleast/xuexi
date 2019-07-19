// 引入 timestamp 模块
var timestamp = require('time-stamp');

console.log(timestamp());

console.log(timestamp.utc());


console.log(timestamp('YYYY') + '年' + timestamp('MM') + '月' + timestamp('DD') + '日');