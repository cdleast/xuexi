// 1. 暴露属性
// export var name = 'jack';
// export var sex = '男';

/*
// 2.暴露构造函数
export function userInfo() {
    this.name = 'jack';
    this.age = 18;
    this.say = function(){
        console.log('ok');
    }
}

    // 3.  暴露对象
    export var obj =  {
        name:'jack',
        age:18
    }
*/


var obj = {
    name: 'jack',
    age: 18
}
// 让接收的时候不用{} 需要加上default
export default obj;