// every - some

/** 场景1
* 计算对象数组中每个电脑的操作系统是发可用
* 大于16位操作系统表示可用,否则不可用
*/
var computers = [
    { name: "Apple", ram: 16 },
    { name: "IBM", ram: 4 },
    { name: "Acer", ram: 32 },
]
var everyComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    // 拿到每一个对象
    var computer = computers[i];
    // 判断操作系统是否等于16位,every必须所有条件都满足,some有一个条件满足即可
    if (computer.ram < 16) {
        everyComputersCanRunProgram = false;
    } else {
        someComputersCanRunProgram = true;
    }
}
// console.log(everyComputersCanRunProgram);
// console.log(someComputersCanRunProgram);


// ES6 - Every
// Every: 一假即假
// Some:一真即真
var every = computers.every(function (computer) {
    // 拿到的第一个值就是假,后面的值就不会继续遍历了
    return computer.ram > 16;
})
// console.log(every);

// ES6 - Some
var some = computers.some(function (computer) {
    // 拿到的第一个值就是真,后面的值就不会继续遍历了,返回的结果就为真
    return computer.ram > 16;
})
// console.log(some);


/** 场景2
* 假定有一个注册页面,判断所以input内容长度是否大于0
*/
function Field(value) {
    this.value = value;
}
// 给Field原型上加个方法
Field.prototype.validate = function () {
    return this.value.length > 0;
}
var username = new Field('henrywu');
var telephone = new Field('18888888');
var password = new Field('256789');

// ES5判断长度
// console.log(username.validate() && telephone.validate() && password.validate());

// ES6 every判断长度
var fields = [username, telephone, password]
var formIsValid = fields.every(function (field) {
    return field.validate();
})
console.log(formIsValid);

// 实现逻辑
if (formIsValid) {
    // 注册成功
} else {
    // 给用户一个友善的错误提醒
}











