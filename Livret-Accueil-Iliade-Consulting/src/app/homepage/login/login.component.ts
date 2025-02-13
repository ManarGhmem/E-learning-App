import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });

  }

  submit(): void {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
        return throwError(error);
      }),
      
    )
      .subscribe((response: any) => {
        console.log(response);
        // Assuming response.jwt contains the JWT token
        if (response.jwt) {
          this.authService.setToken(response.jwt);
          this.authService.setRole("role", response.user.role);
          this.authService.setName("name", response.user.name);
          this.authService.setEmail("email", response.user.email);

        }
        this.router.navigate(['/home']);
      });
  }
  redirectToActivate(): void {
    this.router.navigate(['/activate']); // Navigate to the activation page
  }

  setName(key: string, name: string): void {
    localStorage.setItem(key, name);
  }

  sendTokenToBackend(token: string): void {
    this.http.post('http://localhost:8000/api/auth/google/', { google_token: token }, { withCredentials: true }).subscribe(
      (response: any) => {
        console.log('Token d\'authentification Google récupéré :', token);
        console.log('Token verified by backend', response);
        if (response.jwt) {
          this.authService.setEmail("email", response.user.email);
          this.router.navigate(['/home']); // Redirection vers la page d'accueil
        } else if (response.error === 'Token d\'authentification Google manquant') {
          this.errorMessage = 'Le token d\'authentification Google est manquant.';
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
      }
    );
  }
  
  
}  