// 引入数据库配置的模型
var mongoose = require('../configs/db_config');

// 定义骨架（其实就是来约束 article 集合的属性）
var articleSchema = new mongoose.Schema({
    itemId: {
        type: 'ObjectId',
        // 关联的集合
        ref: 'item'
    },
    title: String,
    author: String,
    keywords: String,
    description: String,
    ctime: {
        type: Date,
        default: new Date(),
    },
    imgUrl: String,
    content: String
})

// 创建 article 集合的模型
var articleModel = mongoose.model('article', articleSchema);

// 暴露 articleSchema 模型
module.exports = articleModel;