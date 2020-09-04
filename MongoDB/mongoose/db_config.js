// 引入 mongoose 模块
var mongoose = require('mongoose');

// 1、连接数据库
mongoose.connect('mongodb://localhost:27017/my_database', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
});


// 暴露模块
module.exports = mongoose;