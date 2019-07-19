/** 场景1
* 假定有一个对象数组(A),找到符合条件的对象name=Alex
*/
var users = [
    { name: 'Jill', number: 1 },
    { name: 'Alex', number: 2 },
    { name: 'Bill', number: 3 },
    { name: 'Dill', number: 4 },
    { name: 'Alex', number: 5 },
]
// ES5
// 定义一个变量用来存储一会准备找到的数据
var user;
// 循环遍历数组对象
for (var i = 0; i < users.length; i++) {
    // 判断循环的name是否等于Alex
    if (users[i].name === 'Alex') {
        // 如果等于就把数据给到user
        user = users[i];
        // 结束循环,要不找到Alex之后还会继续循环下面的,很费资源
        break;
    }
}
// console.log(user);

// ES6 find方法 只会找到第一次出现的内容
user = users.find(function (user) {
    return user.name === 'Alex';
})
// console.log(user);


/** 场景2
* 假定有一个对象数组(A),根据指定对象的条件找到数组中符合条件的对象
* 查找posts中id与comment中postId相同的数据
* 匹配不到会返回undefined
*/

// 指定对象
var comments = { postId: 1, content: 'helloworld.js' };
// 查找数组
var posts = [
    { id: 1, title: 'Node.js' },
    { id: 2, title: 'Vue.js' }
]
// 查找函数
function postForComment(posts, comments) {
    return posts.find(function(post){
        return post.id === comments.postId;
    })
}
console.log(postForComment(posts, comments));