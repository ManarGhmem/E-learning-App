import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; // Import NgbCarouselConfig
import { Project, ProjectService } from '../service/project.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sap-projet',
  templateUrl: './sap-projet.component.html',
  styleUrls: ['./sap-projet.component.css']
})
export class SapProjetComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;

  private intervalId: any;
  private currentPosition = 0;
  private readonly itemWidth = 300; // Adjust this based on your item width
  private readonly transitionDuration = 500 ; // Adjust transition duration in milliseconds

  logos: string[] = [
    '../../assets/images/projet/total-removebg-preview.png',
    '../../assets/images/projet/engie.png',
    '../../assets/images/projet/800Logo_DSI.jpg',
    // Add more logos as needed
  ];

  getLogo(index: number): string {
    return this.logos[index % this.logos.length];
  }
  users = [
    { name: 'John Doe', role: 'Admin', imageUrl: 'assets/images/users/1.jpg' },
    { name: 'Jane Smith', role: 'Editor', imageUrl: 'assets/images/users/1.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/2.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/3.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/4.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/5.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/5.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/2.jpg' },
    { name: 'Alice Johnson', role: 'Viewer', imageUrl: 'assets/images/users/3.jpg' },
    { name: 'John Doe', role: 'Admin', imageUrl: 'assets/images/users/1.jpg' },

  ];

  projects: Project[];
  constructor(private projectService: ProjectService, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    const projectType = 'SAP'; // Replace with the desired project type
    this.getProjectsByType(projectType);
  }

  ngAfterViewInit(): void {
    // Start carousel animation after view initialization
    this.startCarousel();
  }

  ngOnDestroy(): void {
    // Clean up interval on component destroy
    clearInterval(this.intervalId);
  }

  getProjectsByType(projectType: string): void {
    this.projectService.getProjectsByType(projectType)
      .subscribe(projects => this.projects = projects);
  }



  accessMessage: string = '';

  checkAccess(projectId: number): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.projectService.checkProjectAccess(projectId, token).subscribe(
        response => {
          console.log('Access Check Response:', response);
          const accessMessage = response.message;
          if (accessMessage === "Your request for access has been sent to the project chef. Please wait for their response." ||
              accessMessage === "Your request for access is already pending approval.") {
            alert(accessMessage); // Show alert for pending or sent requests
          } else if (accessMessage === "Congratulations! You now have access to this project.") {
            this.router.navigate(['/total-energie']); // Navigate to total-energie page for successful access
          }
        },
        error => {
          console.error('Access Check Error:', error);
          alert('Your request for access has been sent to the project chef. Please wait for their response.'); // Show error alert
        }
      );
    }
  }


















  private startCarousel(): void {
    const numUsers = this.users.length;
    const totalWidth = numUsers * this.itemWidth;
    const containerWidth = this.carouselRef.nativeElement.clientWidth;

    this.intervalId = setInterval(() => {
      const translateX = -1 * (this.currentPosition * this.itemWidth);
      this.carouselRef.nativeElement.style.transition = `transform ${this.transitionDuration / 1000}s ease-in-out`;
      this.carouselRef.nativeElement.style.transform = `translateX(${translateX}px)`;

      this.currentPosition++;

      // Check if carousel reaches end of images
      if (translateX <= -(totalWidth - containerWidth)) {
        // Reset carousel to start position immediately
        setTimeout(() => {
          this.carouselRef.nativeElement.style.transition = 'none'; // Disable transition for reset
          this.carouselRef.nativeElement.style.transform = 'translateX(0)'; // Reset to initial position
          this.currentPosition = 0; // Reset current position
          setTimeout(() => {
            this.carouselRef.nativeElement.style.transition = `transform ${this.transitionDuration / 1000}s ease-in-out`; // Re-enable transition
          }, 50);
        }, this.transitionDuration);
      }
    }, this.transitionDuration + 1000); // Add a small delay to ensure smooth transition between cycles
  }
}


// activeSlideIndex = 0; 

// getRemainingUsers(): any[] {
//   return this.users.slice(3);
// }

// constructor(config: NgbCarouselConfig) {
//   config.interval = 100;
//   config.wrap = true;
//   config.keyboard = false;
// }

// nextSlide() {
//   this.activeSlideIndex = (this.activeSlideIndex + 1) % this.users.length;
// }

// prevSlide() {
//   this.activeSlideIndex = (this.activeSlideIndex - 1 + this.users.length) % this.users.length;
// }


