// filter - 过滤筛选

/** 场景1
 * 假定有一个数值数组(A),获取数组中指定类型的对象放到B数组中
 */
var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'cleery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
]

// ES5
// 定义一个空的数组,用来存储准备拿到的数据
var filterdProducts = [];

// ES5遍历数组
for (var i = 0; i < products.length; i++) {
    // 判断数组porducts的type类型是否等于fruit
    if (products[i].type === 'fruit') {
        // 如果等于,就添加到准备接受新数据的数组filterdProducts中
        filterdProducts.push(products[i]);
    }
}
// console.log(filterdProducts);

// ES5打印每个对象
for (var i = 0; i < filterdProducts.length; i++) {
    // console.log(filterdProducts[i]);
}


// ES6 filter
var filterdProducts = products.filter(function (product) {
    return product.type === 'fruit';
})
// console.log(filterdProducts);

// ES6打印每个对象
filterdProducts.forEach(function (filterd) {
    // console.log(filterd);
})



/** 场景2
* 假定有一个数值数组(A),过滤掉不满足以下条件的对象
* 条件：蔬菜 数量大于0，价格小于10
*/
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 16 },
    { name: 'cleery', type: 'vegetable', quantity: 30, price: 8 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 6 },
]
products = products.filter(function (product) {
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10
})
// console.log(products);


/** 场景3
* 假定有两个数组(A,B),根据A中id值,过滤掉B数组中不符合的数据
*/
var post = { id: 4, title: 'Javascript' };
var comments = [
    { postId: 1, content: 'Angular4' },
    { postId: 2, content: 'Vue.js' },
    { postId: 3, content: 'Node.js' },
    { postId: 4, content: 'React.js' },
]

function commentsForPost(post, comments) {
    return comments.filter(function(comment){
        return comment.postId === post.id;
    })
}
console.log(commentsForPost(post, comments));







