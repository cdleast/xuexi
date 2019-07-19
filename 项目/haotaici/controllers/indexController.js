// 声明控制器对象
var indexController = {};

// 引入栏目的模型
var itemModel = require('../models/itemModel');
// 引入文章的模型
var articleModel = require('../models/articleModel');
// 引入admin模型
var adminModel = require('../models/adminModel');


// 前台页面
indexController.index = function (req, res) {
    // 需要栏目的数据
    itemModel.find().sort({ order: 1 }).exec(function (err, data) {

        getArticleDates(0);
        function getArticleDates(i) {
            articleModel.find({ itemId: data[i]._id }).limit(10).exec(function (error, data1) {
                // 把查到的文章数据给 data1
                data[i].articles = data1;
                if (i < data.length - 1) {
                    getArticleDates(++i);
                } else {
                    // 响应登录的模版
                    res.render('index', { items: data });
                }
            })
        }
    })
}


// 暴露控制器
module.exports = indexController;