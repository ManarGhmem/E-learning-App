// import { Component , OnInit } from '@angular/core';
// import { ScrollServiceService } from 'src/app/service/scroll-service.service'; // Import the service
// import { ViewChild, ElementRef } from '@angular/core';
// import { Router } from '@angular/router'; // Import Router
// @Component({
//   selector: 'app-aboutus',
//   templateUrl: './aboutus.component.html',
//   styleUrls: ['./aboutus.component.css']
// })
// export class AboutusComponent implements OnInit {
//   // ... other component logic

//   constructor(private scrollService: ScrollServiceService,private router: Router) {}

//   ngOnInit() {
//     this.scrollService.scrollToAboutUsEvent.subscribe(() => {
//       // Perform smooth scrolling logic within app-aboutus when the event is received
//     });
//   }


//   @ViewChild('aboutUsComponent') aboutUsRef: ElementRef; // Reference the element

//   scrollToAboutUs() {
//     if (this.aboutUsRef) {
//       this.aboutUsRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }
import { Component , OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/service/scroll-service.service'; // Import the service
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private scrollService: ScrollServiceService,private router: Router) {}

  ngOnInit() {

  }


  @ViewChild('aboutUsComponent') aboutUsRef: ElementRef;

  scrollToAboutUs() {
    if (this.aboutUsRef) {
      this.aboutUsRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}