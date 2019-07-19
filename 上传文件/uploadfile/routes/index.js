var express = require('express');
var router = express.Router();

// 引入 multer 模块（用来做文件上传）
var multer = require('multer')

// 引入文件（ 后缀名） 模块
var path = require('path');

// 引入时间模块
var timestamp = require('time-stamp');

// 引入uid模块（取唯一数）
var uid = require('uid');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// 配置的参数
var storage = multer.diskStorage({
    // 设置接收上传文件的目录
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    // 保存文件的文件名
    filename: function(req, file, cb) {
        // 获取上传文件的后缀名
        var extname = path.extname(file.originalname);
        // cb(null, file.fieldname + '-' + Date.now() + extname);

        // 文件名字自己编写，按上传时间
        cb(null, file.fieldname + '-' + timestamp('YYYYMMDD') + '-'
            + uid() +extname);
    }
})

function fileFilter(req, file, cb) {
    // 定义允许你上传的文件类型
    var imgType = ['image/jpeg', 'image/png', 'image/gif']

    // 判断用户上传图片格式是否正确
    if (imgType.indexOf(file.mimetype) == -1) {
        // 拒绝这个文件
        cb(null, false);
        cb(new Error('上传的文件格式错误'));
    } else {
        // 接收这个文件
        cb(null, true);
    }
}

// 上传文件的配置
var upload = multer({
    // 储存文件的配置
    storage: storage,

    // 过滤文件的配置
    fileFilter: fileFilter,

    // 限制文件大小
    limits: {
        // 单位（字节）
        fileSize: 1024 * 1024 * 1
    }

})


// 简单配置上传文件的参数
router.post('/uploadfile', upload.single('myfile'), function(req, res, next) {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
    res.send('ok');
})


module.exports = router;