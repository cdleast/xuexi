var express = require('express');
var router = express.Router();

// 引入mondodb模块
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;

// 数据库地址
var url = 'mongodb://127.0.0.1:27017/classmate';


// 用户列表页
router.get('/', function(req, res, next) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('users');
    var kcs = new model('kcs');

    // 默认查询3条数据
    var pageSize = 3;

    // 回调函数
    users.find(function(err, data) {
        if (err) {
            res.send(err);
        } else {
            // 响应模板发送数据
            // 这样写是不行的，因为 js 是异步的
            // var num = 0;
            // for (var i = 0; i < data.length; i++) {
            //     kcs.findOne(data[i].kcId, function(err, data1) {
            //         console.log(data1.name);
            //         data[num].kcName = data1.name;
            //         num ++;
            //         if (num == data.length) {
            //             res.render('index', { userlist: data });
            //         }
            //     })
            // }


            




            // 我们来写个行的
            getkcName(0);

            function getkcName(i) {
                kcs.findOne(data[i].kcId, function(error, data1) {
                    // 把查询到的课程名称，添加到在 data 这个大数组里
                    data[i].kcName = data1.name;
                    if (i < data.length - 1) {
                        // 查询下一个
                        getkcName(++i);
                    } else {
                        res.render('index', { userlist: data });
                    }
                })
            }
        }
    });
});


// 添加用户的页面的路由
router.get('/addUser', function(req, res) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var kcs = new model('kcs');

    // 查询所有课程
    kcs.find(function(err, data) {
        // 响应模板
        res.render('addUser', { kcList: data });
    })
})


// 接收添加用户提交过来的数据
router.post('/userInsert', function(req, res) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('users');

    // 回调函数，插入数据
    users.insert(req.body, function(err) {
        if (err) {
            res.send(err);
        } else {
            // 添加成功跳转到首页
            res.redirect('/');
        }
    });
})


// 编辑用户的页面的路由
router.get('/userEdit/:_id', function(req, res) {
    // 获取学员数据的id
    // console.log(req.params._id);

    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('users');
    var kcs = new model('kcs');

    // 查询数据
    users.findOne(req.params._id, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            // 查询所有课程
            kcs.find(function(err, data1) {
                // 响应模板发送数据
                res.render('userEdit', { userlist: data, kcList: data1 });

            })
        }
    })
})


// 修改用户的页面的数据
router.post('/userUpdate', function(req, res) {
    // 修改之后提交的数据
    // console.log(req.body);

    var _id = req.body._id;
    // 删除 req.body 里的 _id 因为 mongodb 里的数据 _id 是不能参与修改的
    delete req.body._id;

    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('users');

    // 修改数据
    users.update(_id, req.body, function(err) {
        if (err) {
            res.send(err);
        } else {
            // 修改数据成功跳转到首页
            res.redirect('/');
        }
    })

})


// 删除学员的路由
router.get('/userRemove/:_id', function(req, res) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('users');

    // 删除数据
    users.remove(req.params._id, function(err) {
        if (err) {
            console.log('数据插入失败');
        } else {
            // 数据插入成功之后跳转到首页
            res.redirect('/');
        }
    })
})


// 添加课程的路由
router.get('/addKc', function(req, res) {
    res.render('addKc');
})

// 添加课程路由
router.post('/kcInsert', function(req, res) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('kcs');

    // 回调函数，插入数据
    users.insert(req.body, function(err) {
        if (err) {
            res.send(err);
        } else {
            // 添加成功跳转到首页
            res.redirect('/kcList');
        }
    });
})


// 学科列表路由
router.get('/kcList', function(req, res) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('kcs');

    // 添加学科
    users.find(function(err, data) {
        if (err) {
            res.send(err);
        } else {
            // 响应模板发送数据
            res.render('kcList', { kcList: data });
        }
    });
})



// 编辑课程的页面的路由
router.get('/kcEdit/:_id', function(req, res) {
    // 获取学员数据的id
    // console.log(req.params._id);

    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('kcs');

    // 查询数据
    users.findOne(req.params._id, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            // 响应模板发送数据
            res.render('kcEdit', { kcEdit: data });
        }
    })
})


// 修改课程的信息的数据
router.post('/kcUpdate', function(req, res) {
    // 修改之后提交的数据
    // console.log(req.body);

    var _id = req.body._id;
    // 删除 req.body 里的 _id 因为 mongodb 里的数据 _id 是不能参与修改的
    delete req.body._id;

    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('kcs');

    // 修改数据
    users.update(_id, req.body, function(err) {
        if (err) {
            res.send(err);
        } else {
            // 修改数据成功跳转到首页
            res.redirect('/kcList');
        }
    })
})



// 删除课程的路由
router.get('/kcEditRemove/:_id', function(req, res) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('kcs');

    // 删除数据
    users.remove(req.params._id, function(err) {
        if (err) {
            console.log('数据插入失败');
        } else {
            // 数据插入成功之后跳转到首页
            res.redirect('/kcList');
        }
    })
})


module.exports = router;