import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = 'http://localhost:8000/api/supports/';
  // private apiUr = 'http://localhost:8000/api/supports/add/';

  constructor(private http: HttpClient) { }

  getAllSupports(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}