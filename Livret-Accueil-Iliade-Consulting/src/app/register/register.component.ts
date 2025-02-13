import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  registrationSuccess = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  } 

  submit(): void {
    this.http.post('http://localhost:8000/api/register', { ...this.form.getRawValue()})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.errorMessage = error.error;
          
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
        return throwError(error);
      })
    )
    .subscribe(() => {
      this.registrationSuccess = true;
      // Redirect to login page after successful registration
      console.log('ousssaaaaa')
      this.router.navigate(['/activate']);
    });
}

}