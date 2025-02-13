import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private authTokenKey = 'authToken';
  private apiUrl = 'http://localhost:8000/api/auth/google/';
  private roleKey = 'role';
  private emailKey = 'email';
  private nameKey = 'name';

  constructor(private http: HttpClient, private socialAuthService: SocialAuthService) { }

  login(credentials: { username: string, password: string }) {
    return this.http.post<any>('http://localhost:8000/api/login', credentials).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.setAuthToken(response.token);
          this.setRole("role", response.role);
        }
      })
    );
  }

  signInWithGoogle(): Observable<any> {
    return from(this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)); // Utilisation de socialAuthService
  }
  logout(): Observable<any> {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.roleKey);
    localStorage.removeItem(this.emailKey);
    localStorage.removeItem(this.nameKey);


    return from(this.socialAuthService.signOut());
  }
  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  setRole(key: string, role: string): void {
    localStorage.setItem(key, role);
  }

  getRole(): string | null {
    return localStorage.getItem("role");
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  setEmail(key: string, email: string): void {
    localStorage.setItem(key, email);
  }

  getEmail(): string | null {
    return localStorage.getItem("email");
  }

  setName(key: string, name: string): void {
    localStorage.setItem(key, name);
  }

  getName(): string | null {
    return localStorage.getItem('name');
  }
}
