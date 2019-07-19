/*
* 函数参数默认值
* 优化代码
*/

// function makeAjaxRequest(url, method) {
//     if(!method){
//         method = "GET";
//     }
//     return method;
// }

// 默认值
// function makeAjaxRequest(url, method = "GET") {
//     return method;
// }
// console.log(makeAjaxRequest('goole.com'));
// console.log(makeAjaxRequest('goole.com',"POST"));


function User(id) {
    this.id = id;
}
// console.log(new User(1));

// 随机产生ID
function randomId() {
    return Math.random() * 99999999;
}
// console.log(randomId());

// 创建用户
// function createAdminUser(user) {
//     user.admin = true;
//     return user;
// }
// console.log(createAdminUser(new User(randomId())));

// 比较好的写法
function createAdminUser(user = new User(randomId())) {
    user.admin = true;
    return user;
}
console.log(createAdminUser());