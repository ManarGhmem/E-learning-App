import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MyModuleModule { }
export interface Question {
  question: string;
  id: number;
  response1: string;
  response2: string;
  response3: string;
  correct: string;
}

export interface Response {
  response1: string;
  response2: string;
  response3: string;
  correct: string;
}


export class User {
   id: number;
   username: string;
   
  constructor(username: string) {
    this.username = username;
  }
}

// export class Message {
//   text: string;
//   date: Date; 

//   constructor(text: string, date: Date) {
//     this.text = text;
//     this.date = date;
//   }
// }
export class Message {
  text: string;
  date: Date;
  userName: string;

  constructor(text: string, date: Date, userName: string) {
    this.text = text;
    this.date = date;
    this.userName = userName;
  }
}
