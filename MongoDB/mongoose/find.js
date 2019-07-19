// 引入 user 模型
var userModel = require('./userModel');

// 查询数据
userModel.find({},function(err,data){
	console.log(err);
	console.log(data);
})

