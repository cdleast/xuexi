// 引入数据库的配置模块
var mongoose = require('./db_config');

// 2、定义骨架，用来约束集合
var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    tel: Number
});

// 3、创建 users 集合模型
userModel = mongoose.model('users',userSchema);

// 暴露模型
module.exports = userModel;
