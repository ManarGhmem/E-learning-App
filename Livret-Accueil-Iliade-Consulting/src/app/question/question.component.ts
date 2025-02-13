import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  @ViewChild('webcamVideo', { static: false }) public webcamVideo: ElementRef<HTMLVideoElement>;
  @ViewChild('videoPlayer', { static: false }) public videoPlayer: ElementRef<HTMLVideoElement>;

  quiz_name: string = "SAP";
  name: string = "";
  questionList: any = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;
  supervisorEmail: string = '';
  responseMessage: string = '';
  isQuizStarted: boolean = false;
  isEmailValid: boolean = false;
  stream: MediaStream;
  recordedChunks: Blob[] = [];
  mediaRecorder: MediaRecorder;
  selectedResponse: string = "";
  isAfterQuizCompleted: boolean = false;
  showQuizResultsForm: boolean = false;

  constructor(private router: Router, private questionService: QuestionService, private http: HttpClient, private authService: AuthService) { }
  @HostListener('document:keydown.escape', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.preventDefault(); // Empêche le comportement par défaut de la touche "Escape"
  }
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
    const savedEmail = localStorage.getItem('supervisorEmail');
    if (savedEmail) {
      this.supervisorEmail = savedEmail;
    }
        // this.recordcamComponent.startRecording();
        this.initWebcamStream().then(() => {
          this.startRecording(); // Start recording when the webcam stream is initialized
        });
        this.activateFullscreen();   
        document.addEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange.bind(this));
    document.addEventListener('click', this.handleClick.bind(this));
  }
  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('target') === '_blank') {
      event.preventDefault();
      // Empêcher l'ouverture de la nouvelle fenêtre ou nouvel onglet
    }}
  activateFullscreen() {
    const documentEl = document.documentElement;

    if (documentEl.requestFullscreen) {
      documentEl.requestFullscreen();
    }
  }
  handleFullscreenChange(): void {
    const fullscreenElement = document.fullscreenElement || (document as any).webkitFullscreenElement;

    if (fullscreenElement) {
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
    } else {
      document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }



  ngOnDestroy(): void {
    // this.stopRecording();
    this.stopRecording();
    this.stopWebcamStream(); // Stop the webcam stream
        this.deactivateFullscreen();

    // Supprimer le gestionnaire d'événements lorsque le composant est détruit
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange.bind(this));
    
  }

  deactivateFullscreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }}

  private stopWebcamStream(): void {
    if (this.stream) {
      const tracks = this.stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  }
  handleKeyDown(event: KeyboardEvent): void {
    // Si la touche pressée est "Escape"
    if (event.key === 'Escape') {
      // Vérifier si le mode plein écran est activé
      if (document.fullscreenElement) {
        // Empêcher le comportement par défaut de la touche "Escape"
        event.preventDefault();
      }
    }
  }
  private async initWebcamStream() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = this.webcamVideo.nativeElement;
      videoElement.srcObject = this.stream;

      // Add context menu event listener to prevent default behavior
      videoElement.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    } catch (error) {
      console.error('Error accessing webcam: ', error);
    }
  }

  public startRecording(): void {
    this.recordedChunks = [];
    this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: 'video/webm' });

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    this.mediaRecorder.start();
    console.log('Recording started');
  }

  public stopRecording(): void {
    this.mediaRecorder.stop();
    console.log('Recording stopped');

    this.mediaRecorder.onstop = () => {
      const recordedBlob = new Blob(this.recordedChunks, { type: 'video/webm' });
      const url = window.URL.createObjectURL(recordedBlob);
      this.downloadVideo(url, 'recorded-video.webm');


      const videoPlayer: HTMLVideoElement = this.videoPlayer.nativeElement;
      videoPlayer.src = url;
      videoPlayer.play();
    };
  }

  public downloadVideo(blobUrl: string, filename: string): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      });
  }

  nextQuestion() {
    if (this.currentQuestion === this.questionList.length - 1) {
      this.isQuizCompleted = true;
      this.isAfterQuizCompleted = true; // Mettre à jour isAfterQuizCompleted à true après la fin du quiz
      this.stopCounter();
      // Envoyer automatiquement l'e-mail après la fin du quiz
      this.sendEmailAutomatically();
    } else {
      this.currentQuestion++;
    }
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
      // Envoyer automatiquement l'e-mail après la fin du quiz
      this.sendEmailAutomatically();
    }
    if (option.correct) {
      this.points += 1;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
      this.points -= 0;
    }
  }
  retourAccueil() {
    this.router.navigate(['/home']);
  }
  
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

  startQuiz() {
    // Implémentez la logique pour démarrer le quiz
    this.isQuizStarted = true;
  }
  validateEmail() {
    this.isEmailValid = /\S+@\S+\.\S+/.test(this.supervisorEmail.trim());
  }
  
  saveSupervisorEmail(): void {
    this.validateEmail();
  
    if (this.isEmailValid) {
      localStorage.setItem('supervisorEmail', this.supervisorEmail);
      this.isQuizStarted = true;
    }
  }
  sendEmailAutomatically() {
    if (this.supervisorEmail && this.isQuizCompleted) {
      this.stopRecording();
      this.stopWebcamStream(); // Stop the webcam stream
      const user_email = localStorage.getItem('email');
      const data = {
        user_name: this.name,
        quiz_name: this.quiz_name,
        score: this.points,
        supervisor_email: this.supervisorEmail,
        user_email: user_email,
        question_responses: this.questionList.map(question => ({
          questionText: question.questionText,
          userResponse: question.userResponse || "No response provided",
          correctAnswer: question.options.find(option => option.correct)?.text || "No correct answer provided",
          explanation: question.explanation || "No explanation provided"
      }))
  };

      this.http.post<any>('http://localhost:8000/api/submit-score/', data)
        .subscribe(
          response => {
            this.responseMessage = 'Quiz score submitted successfully';
          },
          error => {
            this.responseMessage = 'Error submitting quiz score';
          }
        );
    }
  }
  getUserResponse(question: any): string {
    // Check if user response exists for the question
    if (question.userResponse && question.userResponse.trim() !== '') {
        return question.userResponse;
    } else {
        return "No response provided";
    }
  }

  getCorrectAnswer(question: any): string {
    // Check if correct answer exists for the question
    if (question.options) {
      const correctOption = question.options.find(option => option.correct);
      if (correctOption) {
        return correctOption.text;
      } else {
        return "No correct answer provided";
      }
    } else {
      return "No correct answer provided";
    }
  }
  updateUserResponse(response: string): void {
    this.questionList[this.currentQuestion].userResponse = response;
}
saveDataToFile(data: any, fileName: string): Observable<any> {
  const apiUrl = 'http://localhost:8000/save-quiz-results/';
  return this.http.post(apiUrl, { data, fileName });
}



}