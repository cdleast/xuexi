// 引入数据库配置的模型
var mongoose = require('../configs/db_config');

// 定义骨架（其实就是来约束 item 集合的属性）
var itemSchema = new mongoose.Schema({
    name: String,
    info: String,
    order: Number
})

// 创建 item 集合的模型
var itemModel = mongoose.model('item',itemSchema);

// 暴露 itemModel 模型
module.exports = itemModel;