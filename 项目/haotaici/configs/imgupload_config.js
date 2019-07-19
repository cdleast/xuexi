// 图片上传的配置文件

// 引入 multer 模块（用来做文件上传的）
var multer = require('multer');
// 引入时间模块
var timestamp = require('time-stamp');
// 引入 path 模块
var path = require('path');
// 引入 uid 模块（取唯一数）
var uid = require('uid');


/******************************************
 * 函数名：imgUpload
 * 功能：处理图片上传的函数
 * 参数：
 *    imgPath(String) -上传图片的路径   
 *    imgType(Array) -上传图片的格式的数组  例如：['image/jpeg', 'image/png', 'image/gif']
 *    fileSize(Number) - 限制图片的大小 单位： 字节
 * 返回值
 * 作者：陈东亮
 * 创建日期: 2019年1月8日
 * 版本：1.0
 ******************************************/
function imgUpload(imgPath, imgType, fileSize) {
    // 储存文件的配置
    var storage = multer.diskStorage({
        // 设置接收上传文件的目录
        destination: function(req, file, cb) {
            cb(null, imgPath);
        },
        // 保存文件的文件名
        filename: function(req, file, cb) {
            // 获取上传文件的 后缀
            var extname = path.extname(file.originalname)
            //  接收文件后保存的文件名
            // cb(null, file.fieldname + '-' + Date.now() + extname);
            cb(null, file.fieldname + '-' + timestamp('YYYYMMDD') + '-' + uid() + extname);
        }
    });

    // 过滤文件的配置
    function fileFilter(req, file, cb) {
        // 判断 用户上传的图片格式是否正确
        if (imgType.indexOf(file.mimetype) == -1) {
            // 拒绝这个文件
            cb(null, false);
            // 如果有问题，你可以总是这样发送一个错误:
            cb(new Error('您的图片格式不正确！'));
        } else {
            // 接受这个文件
            cb(null, true);
        }
    }

    // 上传文件的配置
    var upload = multer({
        // 储存文件的配置
        storage: storage,
        // 过滤文件的配置
        fileFilter: fileFilter,
        // 限制文件大小
        limits: {
            // 单位 字
            fileSize: fileSize,
        }
    })
    // 返回 upload 对象
    return upload;
}

// 暴露图片上传函数
module.exports = imgUpload;