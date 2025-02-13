import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface FormData {
  projectManagerEmail: string;
  description: string;
}


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {

  // projectManagerEmail: string;
  // description: string;

  // constructor(private http: HttpClient) { }

  // submitAccessRequest(): void {
  //   const formData = {
  //     projectManagerEmail: this.projectManagerEmail,
  //     Description: this.description

  // formData = {
  //   projectManagerEmail: '',
  //   description: ''
  // };

  // constructor(private http: HttpClient) { }


  // submitForm() {
  //   this.http.post('http://localhost:8080/api/projects/request', this.formData)
  //     .subscribe(
  //       (response) => {
  //         console.log('Access request submitted successfully:', response);
  //         // Optionally, reset the form after successful submission
  //         this.resetForm();
  //       },
  //       (error) => {
  //         console.error('Error submitting access request:', error);
  //         // Handle error as needed
  //       }
  //     );
  // }

  // resetForm() {
  //   this.formData = {
  //     projectManagerEmail: '',
  //     description: ''
  //   };
  // }

  // isManager = false; // Set to true if user is a manager
  // isProjectLeader = false; // Set to true if user is a project leader


 formData: FormData = {
    projectManagerEmail: '',
    description: ''
  };

  constructor(private http: HttpClient) { }

  submitForm(): void {
    this.http.post<any>('http://localhost:8000/api/send-email/', this.formData)
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Email sent successfully!');
          this.resetForm();
          // Optionally, close the modal here if needed
          // Example: $('#responsive-modal').modal('hide');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  }

  resetForm(): void {
    this.formData = {
      projectManagerEmail: '',
      description: ''
    };
  }
}