var express = require('express');
var router = express.Router();

// 引入 multer 模块（用来做文件上传）
var multer = require('multer')

var path = require('path');

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
        cb(null, file.fieldname + '-' + Date.now() + extname)
    }
})
// 上传文件的配置
var upload = multer({ storage: storage })


// 简单配置上传文件的参数
router.post('/uploadfile', upload.single('myfile'), function(req, res, next) {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
    res.send('ok');
})

module.exports = router;