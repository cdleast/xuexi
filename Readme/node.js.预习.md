
## linux 简单指令（了解）
```
	ls   显示当前目录下的文件和目录	
		-l  详细信息
		-a  显示所有文件

	cd  切换目录

	mkdir 创建目录

	touch 创建一个空文件

	echo 创建带内容的文件
		echo '文件内容' > 文件路径

	cat 查看文件内容

	vi 编辑器

	cp 拷贝
		cp file1 file2;

	rm  删除文件
		-r 递归删除
		-f 强制删除
	
	rmdir 删除空目录
	
```


## 模块
```
	node.js 以模块为单位划分所有的功能，并提供一套完善的模块加载机制	

	// 创建模块

	// 暴露属性
	exports.name = 'jack';

	// 暴露方法
	exports.say = function(){
		console.log('okookkkk');
	}


	// 使用模块
	// 引入模块
	// 自己创建的模块 相对路径 的 ./ 不能省略
	var hello = require('./hello');
```

### http
```
	// 引入 http 模块
	var http = require('http');

	// 创建服务
	http.createServer(function(req,res){
		/*
			req  requet     请求的参数
			res  response 	响应的参数
		*/ 
		// 响应的头信息
		res.writeHead(200,{"content-type":"text/html;charset=utf-8"});

		// 响应内容
		res.write('okkkkk');

		// 响应结束
		res.end('hello jack');

		// 监听的端口号

	}).listen(3000);

```

### buffer 

### fs  文件模块

#### 文件的操作
```
	// 1. 创建目录
	fs.mkdir('test',function(err){
		// err 错误信息参数 null 成功
		if(err){
			console.log('创建目录失败')
		}else{
			console.log('创建目录成功');
		}
	})


	// 2. 删除目录
	fs.rmdir('test',function(err){
		// err 错误信息参数 null 成功
		if(err){
			console.log('删除目录失败')
		}else{
			console.log('删除目录成功');
		}	
	})


	// 3. 文件夹重命名
	fs.rename('test','abc',function(err){
		// err 错误信息参数 null 成功
		if(err){
			console.log('重命名失败')
		}else{
			console.log('重命名成功');
		}
	})


	// 读取文件夹
	fs.readdir('abc',function(err,data){
		// err 错误信息参数 null 成功
		if(err){
			console.log('读取文件夹失败')
		}else{
			// console.log('读取文件夹成功');
			console.log(data);
		}	
	})

```


#### 文件操作
```
	// 1. 创建文件
	fs.writeFile('test.txt','hello jack',function(err){
		if(err){
			console.log('创建文件失败');
		}else{
			console.log('创建文件成功');
		}
	})


	// 文件信息
	fs.stat('test.txt',function(err,data){
		if(err){
			console.log('创建文件失败');
		}else{
			console.log(data);
		}		
	})


	// 删除文件
	fs.unlink('test.txt',function(err){
		if(err){
			console.log('删除失败');
		}else{
			console.log('删除成功');
		}	
	})


	fs.appendFile('test.txt','哈哈哈...',function(err){
		if(err){
			console.log('写入失败');
		}else{
			console.log('写入成功');
		}			
	})


	// 读取文件
	fs.readFile('test.txt',function(err,data){
		if(err){
			console.log('操作失败');
		}else{
			console.log(data.toString());
		}
	})

```

### path
```
	var path = require('path');


	var url = 'http://www.baidu.com/home/list/abc.jpg';

	// dirname() 方法返回一个 path 的目录名
	var dirname = path.dirname(url);
	console.log(dirname);

	// 文件名
	var name = path.basename(url);
	console.log(name);

	// 文件名
	var extname = path.extname(url);
	console.log(extname);
```