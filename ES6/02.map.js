/** 场景1
 * 假定有一个数值数组(A),将A数组中的值以双倍的形式放到B数组
 */

var numbers = [1, 2, 3];
var doubledNumbers = [];

// ES5
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}
// 并没有改变数组本身，只是以双倍的形式放入到doubledNumbers
// console.log(doubledNumbers);

// ES5打印每个数值
for (var i = 0; i < doubledNumbers.length; i++) {
    // console.log(doubledNumbers[i]);
}

// ES6 map 
// map需要返回值，如果不给return，默认返回undefined，map返回的是一个新的数组
var doubled = numbers.map(function (number) {
    return number * 2;
})
// console.log(doubled);

// ES6打印每个数值
doubled.forEach(function (number) {
    // console.log(number)
})

/** 场景2
 * 假定有一个数值数组(A),将A数组中对象某个属性的值存储到B数组中
 */

var cars = [
    { model: 'buick', price: 'cheap',age:10 },
    { model: 'bmw', price: 'expensive',age:20 },
    { model: 'aodi', price: 'aodialiu',age:30 },
]

//  把数组cars中的值price放到数组prices中
var prices = cars.map(function (car) {
    // return car.price;
    return car.age;
})
// console.log(prices);

// 遍历每个值并计算总和
var a = 0;
prices.forEach(function (price) {
    a = a += price;
})
console.log(a);
