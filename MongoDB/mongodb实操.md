# 用 node.js 来操作数据 MongoDB


## 检测者
1. 全局安装
    npm install supervisor -g

2. 启动 supervisor 方法
    supervisor node ./bin/www

    你可以自己设置启动项
    在 package.json 文件的 scripts 属性里
    "scripts": {
        "start": "supervisor node ./bin/www"
    },

# forEach循环
<select value="" class="form-control">
    <% kcList.forEach(function(val){ %>
    <option value=""><%= val.name %></option>
    <% }) %>
</select>

# for循环
<tbody>
<% for(var i = 0;i<userlist.length;i++){ %>
<tr>
    <td>
        <%= userlist[i].username %>
    </td>
    <td>
        <%= userlist[i].sex==1?'男':'女' %>
    </td>
    <td>
        <%= userlist[i].age %>
    </td>
    <td>
        <%= userlist[i].tel %>
    </td>
    <td>
        <a href="/userEdit/<%= userlist[i]._id %>">编辑</a>
        |
        <a href="/userRemove/<%= userlist[i]._id %>" onclick="return confirm('您确定要删除吗?')">删除</a>
    </td>
</tr>
<% } %>
</tbody>

# 学员管理系统
### users 学员信息集合
属性       介绍
id          
username  学员的名字 
sex       性别
age       年龄
tel       电话

# 把前台输入的数据传给数据库 MondoDB 需要下载 mongodb 模块
npm install mongodb --save


<% include header %>    // 包含模板

// 拼接update()的修改条件
var where = { _id: mongo.ObjectId(req.body._id) };
// 拼接find()的查询条件
var where = { _id: mongo.ObjectId(req.params._id) };
// 响应模板发生数据
res.render('userEdit', { userlist: data[0] });
// 拼接 remove() 的删除条件
var where = { _id: mongo.ObjectId(req.params._id) };


# MVC
M   model       模型(工厂)      ---     处理核心的业务
V   view        视图(市场)      ---     用户交互页面
C   controler   控制器(领导)    ---      处理用户动作的流程


index           学员列表页
addUser         学员添加
userEdit        学员列表编辑页

<!-- 注意userEdit隐藏域必须有 -->
<!-- input框的隐藏域，用户看不到，只为和后台数据传输 -->
<input type="hidden" value="<%= kcEdit._id %>" name="_id">

// 用户列表页
router.get('/', function(req, res, next) {
    // 引入 model 模块
    var model = require('../models/model.js');
    var users = new model('users');     // users是学员列表的集合

    // 回调函数
    users.find(function(err, data) {
        if (err) {
            res.send(err);
        } else {
            // 响应模板发送数据
            res.render('index', { userlist: data });
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

    // 查询数据
    users.findOne(req.params._id, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            // 响应模板发送数据
            res.render('userEdit', { userlist: data });
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


# 文件上传
## body-parser 模块做不到文件的上传

## multer





