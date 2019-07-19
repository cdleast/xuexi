//路由
import {Routes, RouterModule} from "@angular/router";
import {DirectoryComponent} from "./directory/directory.component";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
const appRoutes:Routes=[
  {
    //路由参数
    //path:"directory/:person",component:DirectoryComponent
    path:"directory",component:DirectoryComponent
  },
  {
    path:"",component:HomeComponent
  }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
