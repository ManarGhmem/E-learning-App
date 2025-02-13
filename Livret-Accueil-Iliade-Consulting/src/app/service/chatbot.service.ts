import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  messages: any[] = [];  // Array to store messages

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/predict/', { message });
  }

  getMessages(): any[] {
    return this.messages;
  }
}
