import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdateUserRoleServiceService {

  constructor(private http: HttpClient) {}

  updateRole(userId: number, newRole: string): Observable<any> {
    const url = `/api/users/${userId}/`; // Replace with your actual API endpoint URL
    const body = { role: newRole };
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };

    return this.http.patch(url, body, options).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      // Backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Backend returned code ${error.status}: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}