// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Emitters } from 'src/app/emitters/emitters';
// import { AuthenticationService } from 'src/app/service/authentication.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   authenticated = false;


//   constructor(private http: HttpClient,private router: Router) {
//   }

//   ngOnInit(): void {
//     Emitters.authEmitter.subscribe(
//       (auth: boolean) => {
//         this.authenticated = auth;
//       }
//     );
//   }

//   logout(): void {
//     this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
//       .subscribe(() => this.authenticated = false);
//       this.router.navigate(['/home']); // Redirect to home page after logout

      
//   }

// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = true;
  public userRole: string;


  constructor(private http: HttpClient, private router: Router,private authService: AuthService, private userService: UserService) {
  }

  isHomePage(): boolean {
    return this.router.url === '/home';
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.userRole = this.authService.getRole() || ''; // Assign an empty string if the retrieved value is null

  }

  scrollToAboutUs() {
    const aboutUsSection = document.getElementById('aboutUsSection');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .subscribe(() => this.authenticated = false);
    this.router.navigate(['/login']); // Redirect to home page after logout
    this.authService.logout();
    this.authenticated = false;

  }
}

