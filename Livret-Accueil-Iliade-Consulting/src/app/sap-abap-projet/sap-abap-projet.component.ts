import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sap-abap-projet',
  templateUrl: './sap-abap-projet.component.html',
  styleUrls: ['./sap-abap-projet.component.css']
})
export class SapAbapProjetComponent implements OnInit, OnDestroy, AfterViewInit{

      @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;
  
    private intervalId: any;
    private currentPosition = 0;
    private readonly itemWidth = 300; // Adjust this based on your item width
    private readonly transitionDuration = 500 ; // Adjust transition duration in milliseconds
  
  
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
  
  
    constructor() { }
  
    ngOnInit(): void { }
  
    ngAfterViewInit(): void {
      // Start carousel animation after view initialization
      this.startCarousel();
    }
  
    ngOnDestroy(): void {
      // Clean up interval on component destroy
      clearInterval(this.intervalId);
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
  
  
  

