import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-squarebutton',
  templateUrl: './squarebutton.component.html',
  styleUrls: ['./squarebutton.component.css']
})
export class SquarebuttonComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 100) { // Adjust the scroll position threshold as needed
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
