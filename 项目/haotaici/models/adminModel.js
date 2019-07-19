// 引入数据库配置的模块
var mongoose = require('../configs/db_config');

// 定义骨架 （其实就是来约束 admin 集合的属性）
var adminSchema = new mongoose.Schema({
    username:String,
    password:String,
    ctime:{
        type:Date,
        default: new Date()
    }
});

// 创建 admin 集合的模型
var adminModel = mongoose.model('admin',adminSchema);

// 暴露 adminModel 的模型
module.exports = adminModel;