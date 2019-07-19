var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// 响应模板，并分配数据
  	res.render('index');
});

// 分配路由 post 提交的表单页面
router.get('/postdata',function(req,res){
	// 响应模板，并分配数据
	res.render('postdata');
})


// 写一个路由来接收 get 表单提交的数据
router.get('/getdata',function(req,res){
	// 用 get 方式提交的数据在 req.query 里
	console.log(req.query);
	res.send(req.query);
})


// 写一个路由来接收 post 表单提交的数据
router.post('/test',function(req,res){
	// 用 post 方式提交的数据在 req.body 里
	console.log(req.body);
	// res.send(req.body);
	res.send(req.body.username);
})





router.get('/list', function(req, res, next) {
	// 1、res.send('这是列表页');

	// 2、响应模板
  	// res.render('list');

  	// 3、响应模板，并分配数据
  	res.render('list',{message:'这是列表页面a'});
});

router.get('/login', function(req, res, next) {
	// 响应模板，并分配数据
  	res.send('用户登录页面');
});

module.exports = router;
