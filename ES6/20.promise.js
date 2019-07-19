/**
* 构造函数: Promise
* 一个非常牛逼闪电的东西
*/

let promise = new Promise((resolve, reject) => {
    // 3秒后调用
    setTimeout(() => {
        resolve();  // 成功会执行then方法
    }, 3000)
    // reject();  // 失败执行catch方法
});
// console.log(promise);

promise.then(() => {
    console.log("成功,没有任何问题");
}).then(() => {
    console.log("成功,可以无限调用then方法");
}).catch(()=>{
    console.log("oo,出现了问题");
})













