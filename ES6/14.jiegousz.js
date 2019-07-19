/*
* 解构数组-对象
*/

const names = ['henry', 'bucky', 'emily'];

// 解构数组使用[]
// const [name1, name2, name3] = names;
// console.log(name1, name2, name3);

// 返回数组个数
// const { length } = names;
// console.log(length);

// 结合展开运算符
// const [name, ...rest] = names;
// console.log(name);
// console.log(...rest);

// 对象数组
const people = [
    { name: 'henry', age: 20 },
    { name: 'bucky', age: 25 },
    { name: 'emily', age: 30 },
]

// ES5
// var age = people[0].age;
// console.log(age);

// ES6解构
// const [age] = people;
// const [{age}] = people;
// console.log(age);


// 使用场景 将数组转化为对象
const points = [
    [1, 2],
    [2, 3],
    [3, 4]
]

// 期望数据格式
// [
//     { x: 1, y: 2 },
//     { x: 2, y: 3 },
//     { x: 3, y: 4 }
// ]

// ES6
// let newPointe = points.map((pair) => {
//     // const x = pair[0];
//     // const y = pair[1];
//     const [x,y] = pair;
//     return { x, y };
// })

let newPointe = points.map(([x, y]) => {
    return { x, y };
})
console.log(newPointe);











