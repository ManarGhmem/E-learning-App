import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
  // sendEmail(data:any): Observable<any> {
  //   return this.http.post<any>('http://localhost:8000/api/submit-score/', data);
  // }
}