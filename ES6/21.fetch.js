/**
* new http: fetch
* 一个基于promise的请求方法,更简单,更便捷
*/

// console.log(fetch);

// http://jsonplaceholder.typicode.com/posts
let url = 'http://jsonplaceholder.typicode.com/posts';

fetch(url).then((response) => {
    // 将response解析成可读模式(浏览器识别)
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    // 请求吗超过300之后不会打印
    console.log(error);
})

