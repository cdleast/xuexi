var express = require('express');
var router = express.Router();

// 引入mondodb模块
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;

// 数据库地址
var url = 'mongodb://127.0.0.1:27017/classmate';


// 用户列表页
router.get('/', function(req, res, next) {
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
                    // 响应模板发送数据
                    res.render('index', { userlist: data });
                }
            })

            // 关闭数据库
            db.close();
        }
    });

});


// 添加用户的页面的路由
router.get('/addUser', function(req, res) {
    // 响应模板
    res.render('addUser');
})


// 接收添加用户提交过来的数据
router.post('/userInsert', function(req, res) {
    // 把用户提交过来的数据储存到数据库
    // 1、连接数据库
    mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) {
            console.log('连接数据库失败');
        } else {
            console.log('连接数据库成功');

            // 插入数据库
            db.collection('users').insert(req.body, function(error, data) {
                if (error) {
                    console.log('数据插入失败');
                } else {
                    console.log("数据插入成功");

                    // 数据插入成功之后跳转到首页
                    res.redirect('/');
                }
            })

            // 关闭数据库
            db.close();
        }
    });
})


// 编辑用户的页面的路由
router.get('/userEdit/:_id', function(req, res) {
    // 获取学员数据的id
    // console.log(req.params._id);

    // 拼接find()的查询条件
    var where = { _id: mongo.ObjectId(req.params._id) };

    mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) {
            console.log('连接数据库失败');
        } else {
            console.log('连接数据库成功');

            // 查询数据库
            db.collection('users').find(where).toArray(function(error, data) {
                // 判断是否查询成功
                if (error) {
                    console.log('查询数据库失败');
                } else {
                    // 响应模板发生数据
                    res.render('userEdit', { userlist: data[0] });
                }
            })

            // 关闭数据库
            db.close();
        }
    });


    // 修改用户的页面的数据
    router.post('/userUpdate', function(req, res) {
        // 修改之后提交的数据
        // console.log(req.body);


        // 拼接update()的修改条件
        var where = { _id: mongo.ObjectId(req.body._id) };
        // 删除 req.body 里的 _id 因为 mongodb 里的数据 _id 是不能参与修改的
        delete req.body._id;

        // 1、连接数据库
        mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) {
                console.log('连接数据库失败');
            } else {
                console.log('连接数据库成功');

                // 修改数据
                db.collection('users').update(where, req.body, function(error) {
                    // 判断修改的结果
                    if (error) {
                        console.log('修改数据失败');
                    } else {
                        // 修改成功跳转到首页
                        res.redirect('/');
                    }
                })

                // 关闭数据库
                db.close();
            }
        });
    })
})


// 删除学员的路由
router.get('/userRemove/:_id', function(req, res) {
    // 拼接 remove() 的删除条件
    var where = { _id: mongo.ObjectId(req.params._id) };

    // 1、连接数据库
    mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) {
            console.log('连接数据库失败');
        } else {
            console.log('连接数据库成功');

            // 删除数据
            db.collection('users').remove(where, function(error) {
                // 判断删除数据的结果
                if (error) {
                    console.log('修改数据失败');
                } else {
                    // 删除数据成功跳转到首页
                    res.redirect('/');
                }
            })

            // 关闭数据库
            db.close();
        }
    });
})

// 添加课程的路由
router.get('/addKc',function(req,res){
    res.render('addKc');
})


// 插入课程的路由
router.post('/kcInsert', function(req, res) {
    // 把用户提交过来的数据储存到数据库
    // 1、连接数据库
    mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) {
            console.log('连接数据库失败');
        } else {
            console.log('连接数据库成功');

            // 插入数据库
            db.collection('kcs').insert(req.body, function(error, data) {
                if (error) {
                    console.log('数据插入失败');
                } else {
                    console.log("数据插入成功");

                    // 数据插入成功之后跳转到首页
                    res.redirect('/');
                }
            })

            // 关闭数据库
            db.close();
        }
    });
})

module.exports = router;