/** 
* spread operator 展开运算符
* 更快,更便捷的操作数组 
*/

// function addNumbers(numbers) {
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     }, 0)
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(addNumbers(numbers));


// function addNumbers(a, b, c, d, e) {
//     var numbers = [a, b, c, d, e];
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     }, 0)
// }
// console.log(addNumbers(1, 2, 3, 4, 5));

// ES6展开运算符
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}
// console.log(addNumbers(1, 2, 3, 4, 5));


var defaultColors = ["red", "greed"];
var favoriteColors = ["orange", "yellow"];
var fallColors = ["fire red", "fall orange"];

// concat 数组拼接
// defaultColors = defaultColors.concat(favoriteColors);
// console.log(defaultColors);

// 分布操作符
// console.log([...defaultColors, ...favoriteColors,...fallColors]);
// 还可以添加字符串等
// console.log(["bule",...defaultColors, ...favoriteColors,...fallColors]);


// 练习
function validateShoppingList(...items) {
    // 判断数组里有没有milk,如果没有,添加进去
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}
console.log(validateShoppingList("orange", "bread", "eggs"))