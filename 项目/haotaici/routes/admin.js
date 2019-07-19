var express = require('express');
var router = express.Router();

// 引入 后台控制器
var adminController = require('../controllers/adminController');

// 后台管理员登录页面
router.get('/login',adminController.login);
// 后台管理员登录操作
router.post('/doLogin',adminController.doLogin);
// 验证码
router.get('/code',adminController.code);
// 退出登录操作
router.get('/logout',adminController.logout);



// 后台首页
router.get('/', adminController.index);


// 栏目列表
router.get('/itemList', adminController.itemList);
// 添加栏目
router.get('/itemAdd', adminController.itemAdd);
// 插入栏目
router.post('/itemInsert', adminController.itemInsert);
// 编辑栏目的页面
router.get('/itemEdit/:_id', adminController.itemEdit);
//  修改栏目的页面
router.post('/itemUpdate',adminController.itemUpdate);
//  删除栏目
router.get('/itemDel/:_id',adminController.itemRemove);


// 添加文章的页面
router.get('/articleAdd',adminController.articleAdd);
// 插入文章的信息
router.post('/articleInsert',adminController.articleInsert);
// 文章列表
router.get('/articleList',adminController.articleList);


module.exports = router;