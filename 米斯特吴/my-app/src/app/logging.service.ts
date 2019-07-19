import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log(){
    console.log("log is printing....")
  }
  pot(){
    console.log("pot is people.....")
  }
  constructor() { }

}
