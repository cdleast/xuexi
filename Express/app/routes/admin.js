var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// 响应模板，并分配数据
	res.render('admin/index');
});

router.get('/login', function(req, res, next) {
  res.send('我是后台管理登录页面');
});

module.exports = router;