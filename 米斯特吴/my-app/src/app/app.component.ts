import { Component } from '@angular/core';

@Component({
  //html中调用了这个选择器
  selector: 'app-root',
  //当选择器被执行时,就会执行template
  templateUrl: './app.component.html',
  //当template执行后,就会执行style.css
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  person:person;
  arr:string[];
  parentMethod(){
    //这是父级app.ts的方法
    alert("这是父级app.ts的方法");
  }
  constructor() {
    this.person = {
      name: "bobo",
      color: "red",
      phone: "1231564654"
    };
    this.arr=["nanyang1","nanyang2","nanyang3"];
  }
}
  interface person{
  name:string,
  color:string,
  phone:string
}
