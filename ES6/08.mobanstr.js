/**
 * 模板字符串
 */

//  定义变量
let name = '孙悟空';
// ES6模板字符串使用变量
// ${ name }

// 定义函数
function makeUppercase(word) {
    return word.toUpperCase();
}
// ES6模板字符串中使用函数
// ${makeUppercase('Hello')}

//  ES5 模板字符串
//  let element = '<h1>Hello World!</h1>'+
//  '<p>ES5模板字符串不能换号,换行必须适应+进行相加</p>';
//  document.getElementById('template').innerHTML = element;

// ES6 模板字符串
let element = `
    <h1>${makeUppercase('Hello')},${name}</h1>
    <p>ES5模板字符串不能换号,换行必须适应+进行相加</p>
    <ul>
        <li>ES5模板字符串不能换号,换行必须适应+进行相加</li>
        <li>ES5模板字符串不能换号,换行必须适应+进行相加</li>
        <li>ES5模板字符串不能换号,换行必须适应+进行相加</li>
    </ul>
 `;
document.getElementById('template').innerHTML = element;