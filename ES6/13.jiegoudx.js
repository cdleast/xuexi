/** 
* 解构-对象
* 更快,更便捷
*/

var expense = {
    type: "es6",
    amount: '45'
}

// 拿到数据
// var type = expense.type;
// var amount = expense.amount;
// console.log(type,amount);

// 解构使用{}
// 解构的时候,这里的名字和对象里面的名字要一致,没有的返回undefined
// const { type, amount, abc } = expense;
// console.log(type, amount, amount);


var saveFiled = {
    extension: 'jpg',
    name: 'girl',
    size: 14040
}
// ES5
// function fileSammary(file){
//     return `${file.name}.${file.extension}的总大小是${file.size}`
// }

// ES6
function fileSammary({ name, extension, size }) {
    return `${name}.${extension}的总大小是${size}`
}
// console.log(fileSammary(saveFiled));




