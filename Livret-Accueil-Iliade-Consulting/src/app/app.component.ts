import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livret-Accueil-Iliade-Consulting';
}
export enum Difficulty {
  easy, medium, hard
}

export class History {
  id: number;
  username: string;
  themeName: string;
  levelName: string;
  total: number;
  sore: number;
}

export interface  Level  {
   difficulty: Difficulty;
   id: number;
   themeName: string;
}

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

export interface Theme {
   id: number;
   name: string;
}

export class User {
   id: number;
   username: string;
   
  constructor(username: string) {
    this.username = username;
  }
}
