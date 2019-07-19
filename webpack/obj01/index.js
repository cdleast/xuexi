/*
    require('./a.js');
    require('./b.js');
    require('./c.js');
    alert('test');
    document.getElementById('box').style.color = 'red';

    // 加载模版
    import("./c.js");
    
    // 1.加载模块 接收 模块对外暴露的 值
    import { name,sex } from "./modules/hello.js";
    console.log(name);
    console.log(sex);

    //2. 引入  构造函数
    import { userInfo } from "./modules/hello.js";
    // new 实例化
    var obj = new userInfo();
    console.log(obj.name);

    //3. 接收对象
    import{obj} from './modules/hello.js';
    console.log(obj.name);



*/

// 接收对象
import obj from './modules/hello.js';
console.log(obj.name);

//  如果想要 打包编译 css 的文件时 是直接做不到的，需要下载依赖的loader .
// require('./css/style.css');