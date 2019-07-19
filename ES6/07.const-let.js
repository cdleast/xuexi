/*
* var let const
*/

function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a); // 50
    }
    console.log(a); //50
}
// testVar();

function testLet() {
    let a = 30;
    if (true) {
        let a = 50;
        // 用let定义的a,已经有了作用域的,在{}中,出了{},就找不到了
        console.log(a); // 50
    }
    console.log(a); //30
}
// testLet();

for (var i = 0; i < 10; i++) {
    // console.log(i); // 0-9
}
// console.log(i); // 10


for (let i = 0; i < 10; i++) {
    // console.log(i); // 0-9
}
// console.log(i); // 报错,let出来{}就找不到了

// const 在程序运行当中不可以被改变的量
// const x = 10;
// x = 100; // 报错,不能修改

// 用const定义的数组,可以添加值,但是不可以直接修改
const colors = [];
// colors = "Green"; // 报错,不能修改
colors.push('red'); // 可以添加
console.log(colors);
