var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test');
});



// 来添加超级管理员
router.post('/adminAdd', function(req, res, next) {
    // 引入 admin 的数据模型
    var adminModel = require('../models/adminModel');

    // 引入 md5 模块
    var md5 = require('md5');

    // 判断用户名和密码 去掉用户名和密码两端的空格
    var username = req.body.username.trim();
    // 给密码 md5 加密
    var password = md5(req.body.password.trim());

    // 准备数据
    var userData = {
        username: username,
        password: password
    }

    // 把管理员信息 存到数据库
    adminModel.create(userData, function(err) {
        if (err) {
            res.send('添加管理员失败');
        } else {
            res.send('添加管理员成功');
        }
    })

});


module.exports = router;