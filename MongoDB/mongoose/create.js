// 引入 user 模型
var userModel = require('./userModel');

// 4、准备数据
var userData = {
	name: 'tangbohu',
	age: 18,
	tel: 123
}

// 5、插入数据
userModel.create(userData,function(err){
	console.log(err);
});