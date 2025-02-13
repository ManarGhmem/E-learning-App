import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string; // Add the 'role' property
//   joining_date: string; // Add the 'joining_date' property
// }
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8000/api/';
  // private apiUrl = 'http://localhost:8000/api/user-role';
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  
  
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.usersUrl}users/`);
  }
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.usersUrl}register/`, user);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.patch<any>(`${this.usersUrl}users/${userId}/update/`, userData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.usersUrl}users/${userId}/delete/`);
  }

  getUserDetails() {
    return this.http.get<any>(`${this.apiUrl}user`);
  }

  activateUser(activationToken: string): Observable<any> {
    const url = `http://localhost:8000/api/activate/${activationToken}/`;
    return this.http.get(url);
  }

  // getUserRole(): Observable<string> {
  //   const authToken = this.authService.getAuthToken();
  //   if (!authToken) {
  //     throw new Error('Authentication token not found');
  //   }

  //   const headers = new HttpHeaders({ 'Authorization': `Bearer ${authToken}` });
  //   return this.http.get<string>(this.apiUrl, { headers });
  // }



  }

  // private apiUrl = 'http://localhost:8000/api/user-role/'; // Update with your backend API URL

  // constructor(private http: HttpClient) {}

  // public getUserRole(): Observable<string> {
  //   return this.http.get<string>(this.apiUrl);
  // }

  
//   private apiUrl = 'http://your-api-url/users/';

//   constructor(private http: HttpClient) { }

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }
// }
//   private baseUrl = 'http://your-django-api-url/api/user'; // Update this URL accordingly

//   constructor(private http: HttpClient) { }

//   getUserRole(): Observable<string> {
//     const jwtToken = this.getJwtFromCookie(); // Implement a method to get the JWT from cookie

//     if (!jwtToken) {
//       // Handle error: JWT token not found
//       return throwError('JWT token not found');
//     }

//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${jwtToken}`
//     });

//     return this.http.get<any>(this.baseUrl, { headers })
//       .pipe(
//         map(response => response.role), // Extract 'role' from the response
//         catchError(error => {
//           throw error; // Handle error accordingly
//         })
//       );
//   }

//   private getJwtFromCookie(): string {
//     const name = 'jwt=';
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const cookieArray = decodedCookie.split(';');

//     for (let i = 0; i < cookieArray.length; i++) {
//       let cookie = cookieArray[i];
//       while (cookie.charAt(0) === ' ') {
//         cookie = cookie.substring(1);
//       }
//       if (cookie.indexOf(name) === 0) {
//         return cookie.substring(name.length, cookie.length);
//       }
//     }
//     return '';
//   }
// }
