// 声明控制器对象
var adminController = {};

// 引入栏目的模型
var itemModel = require('../models/itemModel');
// 引入文章的模型
var articleModel = require('../models/articleModel');
// 引入admin模型
var adminModel = require('../models/adminModel');


// 引入图片上传的配置
var imgUpload = require('../configs/imgupload_config');


// 管理员登录页面
adminController.login = function(req, res) {
    // 响应登录的模版
    res.render('admin/login');
}


// 退出登录
adminController.logout = function(req, res) {
    // 把 session 里的数据清空
    req.session.user = null;
    // 响应登录的模版
    res.redirect('/admin/login');
}


// 管理员登录 操作
adminController.doLogin = function(req, res) {
    // 引入 md5 的模块
    var md5 = require('md5');

    // 先判断验证码
    if (req.body.code != req.session.code) {
        console.log('验证码不正确');
        res.redirect('/admin/login');
        return;
    }

    // 判断用户名和密码 去掉用户名和密码两端的空格
    var username = req.body.username.trim();
    // 给密码 md5 加密
    var password = md5(req.body.password.trim());
    // 查询 管理员的信息
    adminModel.findOne({ username: username }).exec(function(err, data) {
        if (data == null) {
            console.log('用户不存在');
            res.redirect('/admin/login');
        } else {
            // 用户存在 判断密码
            if (password == data.password) {
                // 登录成功 把用户的信息 存到 session 里
                req.session.user = data;
                res.redirect('/admin');
            } else {
                console.log('密码不正确');
                res.redirect('/admin/login');
            }
        }
    })
}


// 验证码
adminController.code = function(req, res) {
    // 引入验证码模块
    var captchapng = require('captchapng');
    // 验证码
    var code = parseInt(Math.random() * 9000 + 1000);
    // 把验证码 储存到 session 里
    req.session.code = code;
    // 生成验证码
    var p = new captchapng(80, 30, code);
    p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha) 
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 
    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.send(imgbase64);
}


// 后台首页控制器
adminController.index = function(req, res) {
    // 判断管理员是否登录了
    // if (!req.session.user) {
    //     res.redirect('/admin/login');
    // }
    res.render('admin/index');
}


// 栏目列表页面
adminController.itemList = function(req, res) {
    // 查询 item 的数据
    // sort({order:1})表示以order来排序，exec()表示查询完成之后的操作
    itemModel.find().sort({ order: 1 }).exec(function(err, data) {
        if (err) {
            res.send('操作数据库失败');
        } else {
            // 跳转到栏目的列表页
            res.render('admin/itemList', { itemdata: data });
        }
    })
}


// 添加栏目页面
adminController.itemAdd = function(req, res) {
    res.render('admin/itemAdd');
}


// 插入栏目
adminController.itemInsert = function(req, res) {
    // 看能不能拿到数据
    // res.send(req.body);

    // 把数据添加到数据库
    itemModel.create(req.body, function(err) {
        if (err) {
            res.send('操作数据库失败');
        } else {
            // 跳转到栏目列表页
            res.redirect('/admin/itemList');
        }
    });
}


// 编辑栏目
adminController.itemEdit = function(req, res) {
    // console.log(req.params._id);
    itemModel.find({ _id: req.params._id }, function(err, data) {
        if (err) {
            res.send('操作数据库失败');
        } else {
            console.log(data);
            // 响应页面
            res.render('admin/itemEdit', { itemdata: data[0] });
        }
    })
}


// 修改 栏目
adminController.itemUpdate = function(req, res) {
    // 修改条件/修改的数据/修改之后的操作
    itemModel.update({ _id: req.body._id }, req.body, function(err) {
        if (err) {
            res.send('操作数据库失败');
        } else {
            // 跳转到栏目的列表页
            res.redirect('/admin/itemList');
        }
    })
}


// 删除 栏目
adminController.itemRemove = function(req, res) {
    itemModel.remove({ _id: req.params._id }, function(err) {
        if (err) {
            res.send('操作数据库失败');
        } else {
            // 跳转到栏目的列表页
            res.redirect('/admin/itemList');
        }
    });
}


// 发布文章的页面
adminController.articleAdd = function(req, res) {
    // 查询所有的栏目
    itemModel.find(function(err, data) {
        // 响应页面{ articledata: data }
        res.render('admin/articleAdd', { articledata: data });
    })
}


// 插入文章的信息
adminController.articleInsert = function(req, res) {
    // 接收图片的路径
    var imgPath = 'uploadImg';
    // 定义图片的类型
    var imgType = ['image/jpeg', 'image/png', 'image/gif'];
    // 定义文件的大小
    var fileSize = 1024 * 1024 * 5;

    // 图片上传
    var upload = imgUpload(imgPath, imgType, fileSize).single('imgUrl');
    upload(req, res, function(err) {
        if (err) {
            res.send('图片上传失败');
        } else {
            // 把图片名称放到req.body里面
            req.body.imgUrl = req.file.filename;

            // 把数据插入到数据库
            articleModel.create(req.body, function(err) {
                if (err) {
                    res.send('操作数据库失败');
                } else {
                    // 跳转到栏目的列表页
                    res.redirect('/admin/articleList');
                }
            })
        }
    })
}


// 文章列表
adminController.articleList = function(req, res) {
    // 把数据添加到数据库,populate()是用于关联其他集合并查询属性，itemId查询条件，{name:1}是要查的东西
    articleModel.find().populate('itemId', { name: 1 }).exec(function(err, data) {
        if (err) {
            res.send('操作数据库失败');
        } else {
            // 跳转到栏目的列表页
            res.render('admin/articleList', { articledata: data });
        }
    })
}


// 暴露控制器
module.exports = adminController;