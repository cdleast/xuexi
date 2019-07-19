import { Injectable } from '@angular/core';
//引入系统为我们提供的http模块
import { Http } from "@angular/http";
//用于映射数据
import "rxjs/add/operator/map";
@Injectable()
export class DataService {

  constructor(private http:Http) { }
  //获取数据
  fechData(){

    return this.http.get("https://angular2deom.firebaseio.com/.json").map((res)=>res.json());
  }
}
