//              12表示字节
// var buf = new Buffer(12);
// buf.write('好牛逼啊');
// console.log(buf.toString());

var buf1 = new Buffer('hello');
var buf2 = new Buffer('world');

// concat是连接
var buf3 = Buffer.concat([buf1,buf2]);

// toString()缓冲区
console.log(buf3.toString());