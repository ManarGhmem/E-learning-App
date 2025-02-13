import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  private scrollToAboutUsSubject = new Subject<void>();

  scrollToAboutUs() {
    this.scrollToAboutUsSubject.next();
  }

  get scrollToAboutUsEvent() {
    return this.scrollToAboutUsSubject.asObservable();
  }
}