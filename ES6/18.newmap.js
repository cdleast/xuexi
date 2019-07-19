/**
 * 新的数据结构 map
 * 键值对:与对象不同的是键和值可以是任何类型
 * */

const map1 = new Map();

// 设置key键
const key1 = 'some string';
const key2 = {};
const key3 = function () { };

// 为key设置value值
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// 根据key获取对应的value
// console.log(map1.get(key1));

// 获取对应的value数量
// console.log(map1.size);

// 使用for...of遍历map1中的key and value
for (let [key, value] of map1) {
    // console.log(`${key} = ${value}`);
}

// 只拿到key
for (let key of map1.keys()) {
    // console.log(key);
}

// 只拿到value
for (let value of map1.values()) {
    // console.log(value);
}

// forEach遍历map1
map1.forEach((value, key) => {
    // console.log(`${key} = ${value}`);
})

// 将map1转化为正常的数组
const keyValueArray = Array.from(map1);
// console.log(keyValueArray);

// 将map1中的key转化为数组
const keyArray = Array.from(map1.keys());
// console.log(keyArray);

// 将map1中的value值转化为数组
const valueArray = Array.from(map1.values());
console.log(valueArray);







