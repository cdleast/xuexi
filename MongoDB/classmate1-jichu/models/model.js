// 引入 mongodb 模块
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;


// 数据库地址
var url = 'mongodb://127.0.0.1:27017/classmate';


// 暴露模块
module.express = function() {
    // 查询数据
    this.find = function() {
        // 1、去数据库查询用户集合 users
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                console.log('连接数据库失败');
            } else {
                console.log('连接数据库成功');

                // 查询数据库
                db.collection('users').find().toArray(function(error, data) {
                    // 判断是否查询成功
                    if (error) {
                        console.log('查询数据库失败');
                    } else {
                        console.log(data);
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    }
}