/** 
* class
* 万事皆对象 
*/

// function Car(options){
//     this.title = options.title;
// }

// // 通过原型给Car添加扩展方法drive
// Car.prototype.drive = function(){
//     return "Vroom";
// }
// const car = new Car({title:'BMW'});
// // console.log(car.title);
// // console.log(car.drive());


// // 继承
// function Toyota(options){
//     // 拿到Car中的title
//     Car.call(this,options);
//     this.color = options.color;
// }

// // 让Toyota可以使用drive方法
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// const toyota = new Toyota({color:"red",title:"focus"});
// console.log(toyota);
// console.log(toyota.drive());


// ES6
class Car {
    constructor(options) {
        this.title = options.title;
    }
    drive() {
        return 'vroom';
    }
}
const car = new Car({ title: "BMW" });
// console.log(car);
// console.log(car.drive());

// 继承-Toyota继承父级Car
class Toyota extends Car {
    constructor(options) {
        // 调用方法,必须要有继承父级
        super(options);
        this.color = options.color;
    }
}
const toyota = new Toyota({ color: "red", title: "focus" });
console.log(toyota);
console.log(toyota.drive());

