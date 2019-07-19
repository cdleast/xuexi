var colors = ["res", "blue", "green"];

// for循环遍历数组
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ES6 forEach遍历数组
colors.forEach(function (color) {
    console.log(color)
})

// 联系：遍历数组中的值，并计算总和
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function (number) {
    sum += number;
})
console.log(sum);

// 也可以抽离函数
numbers.forEach(adder);
function adder(number){
    sum += number;
}
console.log(sum);