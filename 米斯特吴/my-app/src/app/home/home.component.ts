import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]
})
export class HomeComponent implements OnInit {
  @Input() sbqPerson;
  @Input() sbqarr;
  //使用EventEmitter自定义事件
  @Output() onsbqMe=new EventEmitter();
  touchMe(msg){
    alert(msg);
  }
  //add = new EventEmitter();
  fireParentEvent(){
    //调用父级方法
    this.onsbqMe.emit();
  }

  // homeTitle:string;
  // title:string;
  // myString:string;
   //person:person;
  constructor(private logger:LoggingService) {
    // this.homeTitle='hello lanou!';
    // this.title="BJH170201";
    // this.myString = "This property data binding....";
    // this.person = {
    //   name:"bobo",
    //   color:"red",
    //   phone:"1231564654"
    // };
    this.porIt();
  }
  porIt(){
    this.logger.pot();
  }
  //初始化内容

  ngOnInit() {
  }

}
// interface person{
//   name:string,
//   color:string,
//   phone:string
// }
