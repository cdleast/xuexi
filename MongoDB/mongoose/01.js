// 引入 mongoose 模块
var mongoose = require('mongoose');

// 1、连接数据库
mongoose.connect('mongodb://localhost:27017/my_database', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
});

// 2、定义骨架，用来约束集合
var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    tel: Number
});

// 3、创建 users 集合模型
userModel = mongoose.model('users',userSchema);

// 4、准备数据
var userData = {
	name: 'shili',
	age: 18,
	tel: 123
}

// 5、插入数据
userModel.create(userData,function(err){
	console.log(err);
});

// 6、查询数据
// userModel.find(function(err,data){
// 	console.log(data);
// })










