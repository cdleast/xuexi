/**
* 数据结构: set
* 集合:可以存储任何数据类型,并且是唯一的(不重复的值)
* */

const set1 = new Set();

// 往set1中添加数据
set1.add(100);
set1.add('A string');
set1.add({ name: 'henry' });
set1.add(true);
set1.add(100); // 不可以重复添加,无作用
// console.log(set1);

const set2 = new Set([1, true, 'string']);
// console.log(set2);

// 计算set1中的数据个数
// console.log(set1.size);

// 检查set中是否拥有对应的值
// console.log(set1.has(100)); // true
// console.log(set1.has(50 * 2)); // true
// console.log(set1.has(50 + 50)); // true

// console.log(set1.has({ name: 'henry' })); // false 匹配的是地址-地址在对象中是唯一的
// console.log({ name: 'henry' } === { name: 'henry' });

// 删除set1中的内容
set1.delete(100);
// console.log(set1);

// 使用for ... of 遍历set
for (let item of set1) {
    // console.log(item);
}

// 使用forEach 遍历set1
set1.forEach((value) => {
    // console.log(value);
})

// 将set1转化为array
const setArray = Array.from(set1);
console.log(setArray);

