// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// import { Emitters } from '../emitters/emitters';
// import { ActivatedRoute, Router,NavigationEnd  } from '@angular/router';
// import { filter, map } from 'rxjs';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   @ViewChild('aboutUsSection') aboutUsSection: ElementRef;

//   message = '';

//   constructor(
//     private http: HttpClient,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//   }

//   ngOnInit(): void {
//     this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
//       (res: any) => {
//         this.message = `Hi ${res.name}`;
//         Emitters.authEmitter.emit(true);
//       },
//       err => {
//         this.message = 'You are not logged in';
//         Emitters.authEmitter.emit(false);
//       }
//     );
    
//     this.route.fragment.pipe(
//       filter(fragment => fragment !== null),
//       map(fragment => fragment?.toLowerCase()) // Using optional chaining
//     ).subscribe(fragment => {
//       // Scroll to the section with the corresponding fragment ID
//       if (fragment) {
//         const element = document.getElementById(fragment);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     });

    
//   }

//   navigateToAboutUs(): void {
//     this.router.navigate(['/home'], { fragment: 'aboutUsSection' });
//   }

//   ngAfterViewInit(): void {
//     // Scroll to the aboutUsSection after view initialization
//     if (this.aboutUsSection) {
//       this.aboutUsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
//     }
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { ActivatedRoute, Router,NavigationEnd  } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('aboutUsSection') aboutUsSection: ElementRef;

  message = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
    
    this.route.fragment.pipe(
      filter(fragment => fragment !== null),
      map(fragment => fragment?.toLowerCase()) // Using optional chaining
    ).subscribe(fragment => {
      // Scroll to the section with the corresponding fragment ID
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

  }

  // navigateToAboutUs(): void {
  //   this.router.navigate(['/home'], { fragment: 'aboutUsSection' });
  // }

  // ngAfterViewInit(): void {
  //   // Scroll to the aboutUsSection after view initialization
  //   if (this.aboutUsSection) {
  //     this.aboutUsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //   }
  // }
}
