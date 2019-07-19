# 开发一个 台词 的网站

## 用到的技术
    html、css、js、bootstrap、node.js、Express、mongodb、mongoose 

## mvc 模式

## 功能
* 前台（用户浏览网站的页面）
    首页、分类页、内容页
    文章关联在分类下
    申请友情链接 

* 后台（管理员的页面）
    登录/注册
    添加、编辑、修改、查看、文章/分类、友情链接 

## 项目的目录结构
    --|bin/                         启动项目录
    --|--|www                       项目启动文件

    --|configs/                     项目的配置文件夹
    --|--|db.config.js              数据库的配置文件
    --|--|imgupload_config.js       图片上传的配置文件

    --|controllers/                 控制器文件夹
    --|--/indexController.js        前台控制器
    --|--/adminController.js        后台控制器

    --|models/                      项目数据库的模型
    --|--|itemModel.js              栏目模型
    --|--|articleModel.js           文章集合的模型


    --|node_modules/                项目所依赖的模块

    --|public/                      静态资源库
    --|--|assets/                   后台模版资源
    --|--|js/                       js 文件
    --|--|css/                      css 文件
    --|--|images/                   图片文件
    --|--|ueditor/                  富文本编辑器的插件

    --|routes/                      路由文件夹
    --|--|index.js                  前台路由
    --|--|admin.js                  后台路由

    --|uploadImg/                   放用户上传的图片 

    --|views/                       视图（模版）文件夹
    --|--|admin/                    放后台的模版
    --|--|--|header.ejs             后台公用的头部
    --|--|--|footer.ejs             后台公用的底部
    --|test.js                      添加管理员
    --|index.js                     前台首页


    --|app.js                       项目入口文件
    --|package.json                 项目的配置文件
    --|readme.md                    自述文件

## 设计数据库
* item 的集合（栏目）
    属性      数据类型        描述
    _id      Object         id
    name     String         栏目名称
    info     String         栏目介绍
    order    Number         排序

* article 的集合（文章）
   属性              数据类型        描述 
   _id              ObjectId       id  
   itemId           ObjectId       栏目分类的ID
   title            String         标题
   author           String         作者
   keywords         String         关键字
   description      String         描述
   content          String         内容
   ctime            Data           时间
   imgUrl           String         封面的图片的url



## 下载的模块
* supervisor            监听node文件变化，自动重启npm start
* mongoose@4.10.6       mongodb进行便捷操作的对象模型工具
* multer                用作文件上传
* uid                   取唯一数
* time-stamp            时间模块
* md5                   用于处理加密
* captchapng            验证码
* express-session       在服务器端记录用户信息









