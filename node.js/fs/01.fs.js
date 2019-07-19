// 引入 fs 模块
var fs = require('fs');


// 1. 创建文件
// fs.writeFile('test.txt', 'hello wrold', function(error) {
//     if (error) {
//         console.log('创建文件失败');
//     } else {
//         console.log('创建文件成功');
//     }
// });


// 2. 查看文件信息
// fs.stat('test.txt', function(error, data) {
//     if (error) {
//         console.log('查看文件失败');
//     } else {
//         console.log(data);
//     }
// })


// 3. 读取文件内容
// fs.readFile('test.txt', function(error, data) {
//     if (error) {
//         console.log('读取文件失败');
//     } else {
//         console.log(data.toString());
//     }
// })


// 4. 删除文件
// fs.unlink('test.txt', function(error) {
//     if (error) {
//         console.log('删除文件失败');
//     } else {
//         console.log('删除文件成功');
//     }
// })


// 5. 在文件里追加内容
// fs.appendFile('test.txt', ' ... hello jack', function(error) {
//     if (error) {
//         console.log('操作失败');
//     } else {
//         console.log('操作成功');
//     }
// })


// 6. 创建目录文件夹
// fs.mkdir('test', function(error) {
//     if (error) {
//         console.log('操作失败');
//     } else {
//         console.log('操作成功');
//     }
// })


// 7. 删除目录
// fs.rmdir('test', function(error) {
//     if (error) {
//         console.log('操作失败');
//     } else {
//         console.log('操作成功');
//     }
// })


// 8. 读取目录
// fs.readdir('test', function(error, data) {
//     if (error) {
//         console.log('读取失败');
//     } else {
//         console.log(data);
//     }
// });


// 9. 给目录重新命名
fs.rename('test', 'abc', function(error) {
    if (error) {
        console.log('操作失败');
    } else {
        console.log('操作成功');
    }
});