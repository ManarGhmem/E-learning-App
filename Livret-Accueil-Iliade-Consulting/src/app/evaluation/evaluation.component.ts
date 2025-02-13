import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {
  @ViewChild('modal') modal!: ElementRef; // Access modal element

  @ViewChild('emailForm') emailForm!: NgForm;
  recipientEmail: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    const formData = {
      email: this.recipientEmail,
      message: this.message
    };

    this.http.post<any>('http://localhost:8000/api/send-email-eval/', formData)
      .subscribe(
        response => {
          alert('Email sent successfully!')
          this.emailForm.resetForm(); // Reset the form
          ;
        },
        error => {
          console.error('Failed to send email:', error);
          alert('Failed to send email. Please try again.');
        }
      );
  }

  dismissModal(): void {
    // Reset the form
    this.emailForm.resetForm();
    // Close the modal using ElementRef and nativeElement
    this.modal.nativeElement.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
}
