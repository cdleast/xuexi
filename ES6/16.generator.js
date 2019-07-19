/*
* generator生成器
* 可以返回多次的函数
*/

// 基本语法
// function* numbers(){
//     yield;
// }
// const gen = numbers();
// console.log(gen.next());
// console.log(gen.next());

// 斐波那契数列-前两个数相加等于第三个数
// function fib(max) {
//     var a = 0;
//     var b = 1;
//     var arr = [0, 1];
//     while(arr.length < max){
//         [a, b] = [b, a + b];
//         arr.push(b);
//     }
//     return arr;
// }
// // (0, 1, 1, 2, 3)
// console.log(fib(5));


// 使用生成器
// function* fib(max) {
//     var a = 0;
//     var b = 1;
//     var n = 0;
//     while (n < max) {
//         yield a;
//         [a, b] = [b, a + b];
//         n++;
//     }
//     return;
// }

// for (var x of fib(5)) {
//     console.log(x);
// }



// generator生成器原理(迭代器实现)
// 迭代器还原生成器的结构
// function nameIterator(names) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < names.length ? { value: names[nextIndex], done: false } : { done: true }
//         }
//     }
// }
// const nameArray = ['herry', 'bucky', 'emily'];
// const names = nameIterator(nameArray);
// console.log(names.next());


// id自增(es生成器)
function* createIds(){
    let index = 1;
    while(true){
        yield index++;
    }
}
const gen = createIds();
for(var i=0;i<10;i++){
    console.log(gen.next().value);
}
