// import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-quiz',
//   templateUrl: './quiz.component.html',
//   styleUrls: ['./quiz.component.css']
// })
// export class QuizComponent implements OnInit {
//   @ViewChild('name') nameKey!: ElementRef;
//   constructor() { }

//   ngOnInit(): void {
//   }
//   startQuiz(){
//     localStorage.setItem("name",this.nameKey.nativeElement.value);
//   }

// }
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  startQuiz() {
    // Demander l'accès à la caméra
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Afficher la vidéo de la caméra sur la page
        const videoElement = this.renderer.createElement('video');
        this.renderer.setProperty(videoElement, 'srcObject', stream);
        this.renderer.appendChild(document.body, videoElement);

        // Bloquer l'écran avec un overlay
        const overlay = this.renderer.createElement('div');
        this.renderer.setStyle(overlay, 'position', 'fixed');
        this.renderer.setStyle(overlay, 'top', '0');
        this.renderer.setStyle(overlay, 'left', '0');
        this.renderer.setStyle(overlay, 'width', '100%');
        this.renderer.setStyle(overlay, 'height', '100%');
        this.renderer.setStyle(overlay, 'background-color', 'rgba(0, 0, 0, 0.5)'); // Overlay semi-transparent
        this.renderer.appendChild(document.body, overlay);
      })
      .catch((error) => {
        console.log('L\'accès à la caméra a été refusé ou une erreur est survenue: ', error);
      });

    // Enregistrer le nom de l'utilisateur
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }
}
