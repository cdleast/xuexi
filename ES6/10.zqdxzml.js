/**
 * 增强对象字面量
 * 解决的问题:缩减代码
 */

// 创建对象
//  new Object(); {}
// 创建数组
// new Array(); []

// ES5正常代码
// function createBookShop(inventort) {
//     return {
//         inventort: inventort,
//         inventortValue: function () {
//             return this.inventort.reduce((total, book) => {
//                 return total + book.price;
//             }, 0)
//         },
//         priceForTitle: function (title) {
//             return this.inventort.find((book) => {
//                 return book.title === title;
//             }).price;
//         }
//     }
// }

// ES6简化版
function createBookShop(inventort) {
    return {
        // 属性和值相同,留一个即可
        inventort,
        inventortValue() {
            return this.inventort.reduce((total, book) => {
                return total + book.price;
            }, 0)
        },
        priceForTitle(title) {
            return this.inventort.find((book) => {
                return book.title === title;
            }).price;
        }
    }
}


const inventort = [
    { title: 'Vue', price: 10 },
    { title: 'Angular', price: 15 },
]

// createBookShop传入inventort,返回一个对象给bookDhop
const bookDhop = createBookShop(inventort);

// console.log(bookDhop.inventortValue());
// console.log(bookDhop.priceForTitle('Angular'));

