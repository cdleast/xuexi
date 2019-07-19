import('./css/style.css');
import('./css/font.css');
import('./css/bgColor.css');
import('./sass/index.scss');


// 创建图片节点
var imgNode = document.createElement('img');
// 加载一下图片
imgNode.src = require('./images/2.jpeg');

// 把图片节点放到body里面
document.body.appendChild(imgNode);