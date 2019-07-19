var express = require('express');
var router = express.Router();

// 引入 multer 模块（用来做文件上传）
var multer  = require('multer')
// 配置文件上传的参数
var upload = multer({ dest: 'uploads/' })



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 简单配置上传文件的参数
router.post('/uploadfile', upload.single('myfile'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  res.send('ok');
})















module.exports = router;
