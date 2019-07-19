/**
 * 动态往DOM中添加内容
 * 回调
 */

// 定义数据
const posts = [
  {title:"Post one",body:"this is post one"},
  {title:"Post two",body:"this is post two"}
];

// 获取数据
function getPosts(){
  // 这就是异步的方法
  setTimeout(() => {
    let output = '';
    // 每一个对象和下标
    posts.forEach((post,index) => {
      output += `<li>${post.title}</li>`;
    });

    // 放到body里
    document.body.innerHTML = output;
  },1000)
}

// getPosts();



function createPost(post,callback){
  setTimeout(() => {
    posts.push(post);
    callback();
  },2000)
}

createPost({title:"Post Three",body:"this is post three"},getPosts);

