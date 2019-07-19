import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {LoggingService} from "../logging.service";
import { DataService } from "../data.service";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService,DataService,AngularFireDatabase]

})
export class DirectoryComponent implements OnInit {
  //person:string;
  people=[
    // {name:"bobo",color:"yellow",phone:"321313213"},
    // {name:"nanyang",color:"red",phone:"46645"},
    // {name:"mengxiang",color:"blue",phone:"123"},
    // {name:"wangfan",color:"pink",phone:"7897"},
    // {name:"changyuan",color:"black",phone:"321313213"},
    // {name:"mingyue",color:"gray",phone:"321313213"},
  ];
  addItem(xcName,xcColor,xcphone){
    this.items.push(
      {name:xcName,color:xcColor,phone:xcphone}
    );
  }
  deleteItem(i){
    this.items.subscribe((res)=>this.items.remove(res[i]))
    //this.people.splice(i,1);
  }
  classes:classes= {'blue':false,'red':false,'underline':false};
  items: FirebaseListObservable<any[]>;
  constructor(private logger:LoggingService,private dataService:DataService,private firebase:AngularFireDatabase,db: AngularFireDatabase){
    this.items = db.list('https://angular2deom.firebaseio.com/');
    //this.logIt();
    //this.dataService.fechData().subscribe((data)=>this.people=data);
    this.fbGetData();
  };
  //链接数据库
  fbGetData(){
    //连上数据库
    //this.firebase.database.ref("/").on("child|_added",(snapshot)=>console.log(snapshot));
  };
  logIt(){
    this.logger.log();

  };
  // constructor(private route:ActivatedRoute) {
  //   //snapshot是/ params是后面的地址
  //   //this.person=route.snapshot.params['person'];
  //
  // }

  ngOnInit() {
    this.items.subscribe((res)=>this.people=res)
  }

}

interface classes{
  blue:boolean,
  red:boolean,
  underline:boolean
}
