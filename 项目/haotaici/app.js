// 加载需要依赖的模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// 引入 cookie 模块
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 引入 session 模块
var session = require('express-session');

// 加载路由模块
var index = require('./routes/index');
var admin = require('./routes/admin');
// 测试（管理员账号）路由
var test = require('./routes/test');

// 加载 express 模块
var app = express();

// 设置模板的路径
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置 cookir
app.use(cookieParser());
// 设置 session
app.use(session({
    resave: true, // 新增
    saveUninitialized: true, // 新增
    // secret 加密用的密钥
    secret: 'suiji',
    // cookie 的生命周期(单位 毫秒)
    cookie: {
        maxAge: 10000 * 60 * 30
    }
}))
// 多页面内共享 session
app.use(function(req, res, next) {
    // res.locals 本地存储信息的对象
    // 设置默认信息 
    res.locals.user = '';

    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    next();
})

// 设置静态资源库
app.use(express.static(path.join(__dirname, 'public')));

// 前台路由 home
app.use('/', index);
// 后台（管理员）
app.use('/admin', admin);
// 测试的路由
app.use('/test', test);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;