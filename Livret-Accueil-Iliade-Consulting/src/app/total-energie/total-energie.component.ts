
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../my-module/my-module.module';
import { AuthService } from '../service/auth.service';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { style } from '@angular/animations';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-energie',
  templateUrl: './total-energie.component.html',
  styleUrls: ['./total-energie.component.css']
})
export class TotalEnergieComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;

  private intervalId: any;
  private currentPosition = 0;
  private readonly itemWidth = 300; // Adjust this based on your item width
  private readonly transitionDuration = 500 ; // Adjust transition duration in milliseconds

  allMessages: Message[] = [];
  messageForm: FormGroup;
  public userRole: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService ,private router: Router ) { }
  users = [
   
    { name: 'Ghada Ben Mansour', role: 'Chef Projet', imageUrl: '../../assets/images/managers/DSC00871.JPG' },
    // { name: 'Ghada Ben Mansour', role: 'Chef de projet', imageUrl: '' },
    { name: 'Sabri', role: 'Ingénieur Conseil', imageUrl: '../../assets/images/managers/sabri.jpg' },
    { name: 'Raouen Djebbi', role: 'Consultante SAP', imageUrl: '../../assets/images/managers/raouen.png' },
    { name: 'Hichem Ben Farhat', role: 'Ingénieur Conseil ', imageUrl: '../../assets/images/managers/hichem.png' },
    { name: 'Zohra Tebib', role: 'Consultante SAP', imageUrl: '../../assets/images/managers/zohra.png' },

  

  ];
  ngOnInit(): void {
    this.userRole = this.authService.getRole() || ''; 
    this.loadMessages();
    this.messageForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userText: ['', Validators.required]
    });
  }

  loadMessages(): void {
    const savedMessages = localStorage.getItem('allMessages');
    if (savedMessages) {
      this.allMessages = JSON.parse(savedMessages);
    }
  }

  updateUserText(): void {
    const { userText} = this.messageForm.value;
    const userName = localStorage.getItem('name') || ''; // Fetch username from local storage
    if (!userText.trim()) {
      // If textarea is empty, don't send the message
      return;
    }
    const newMessage = new Message(userText, new Date(), userName);
    this.allMessages.push(newMessage);
    localStorage.setItem('allMessages', JSON.stringify(this.allMessages));
    this.messageForm.reset();
    
  }

  deleteMessage(index: number): void {
    this.allMessages.splice(index, 1);
    localStorage.setItem('allMessages', JSON.stringify(this.allMessages));
  }


  trackByFn(index: number, message: Message): number {
    return index;
  }
  retourAccueil() {
    this.router.navigate(['/home']);
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
