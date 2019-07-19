function user(){
    this.name = 'jack';
    this.age = 18;
    this.say = function(){
        console.log('嘿嘿嘿。。。');
    }
}

// 暴露构造函数
module.exports = user;