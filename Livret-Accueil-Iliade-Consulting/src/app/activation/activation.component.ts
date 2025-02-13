import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {
  activationToken: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.activationToken = '';
  }

  ngOnInit(): void {
    // Retrieve activation token from route params
    this.route.params.subscribe(params => {
      this.activationToken = params['activationToken'];
    });
  }

  activateUser(): void {
    if (this.activationToken) {
      this.userService.activateUser(this.activationToken).subscribe(
        () => {
          // Account activated successfully, redirect to login
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Activation failed:', error);
          // Handle activation error (e.g., display error message)
        }
      );
    } else {
      console.error('No activation token provided.');
      // Handle case where activation token is missing
    }
  }
}
