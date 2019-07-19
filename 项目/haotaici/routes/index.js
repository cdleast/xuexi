var express = require('express');
var router = express.Router();

// 引入 前台控制器
var indexController = require('../controllers/indexController');

// 前台首页
router.get('/', indexController.index);


















module.exports = router;