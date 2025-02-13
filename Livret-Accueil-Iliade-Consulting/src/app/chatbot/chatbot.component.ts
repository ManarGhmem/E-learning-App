import { Component,ElementRef , ViewChild} from '@angular/core';
import { ChatbotService } from '../service/chatbot.service'; 

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'] 
})
export class ChatbotComponent {
  args: any;
  state: boolean;
  messages: any[];
  newMessage: string; // Déclaration de la propriété newMessage
  isFirstSendClicked: boolean;
    @ViewChild('chatBox') chatBoxRef!: ElementRef;


  constructor(private chatbotService: ChatbotService, private elementRef: ElementRef) { 
    this.args = {
      openButton: document.querySelector('.chatbox__button'),
      chatBox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.send__button')
    }

    this.state = false;
    this.messages = [];
    this.newMessage = ''; // Initialisation de la propriété newMessage
    this.isFirstSendClicked = false; 
  }
  ngOnInit() {
    this.display();
  }

  display() {
    const { openButton, chatBox, sendButton } = this.args;

    openButton.addEventListener('click', () => this.toggleState(chatBox));

    sendButton.addEventListener('click', () => {
      if (!this.isFirstSendClicked) {
        this.toggleFullScreen(chatBox); // Activer le mode plein écran pour la première fois que le bouton Envoyer est cliqué
        this.isFirstSendClicked = true; // Marquer le bouton Envoyer comme déjà cliqué
      }
      this.OnsendButton();
    });

    const node = chatBox.querySelector('input');
    node.addEventListener("keyup", (event: KeyboardEvent) => {
      const { key } = event;
      if (key === "Enter") {
        if (!this.isFirstSendClicked) {
          this.toggleFullScreen(chatBox); // Activer le mode plein écran pour la première fois que la touche Entrée est pressée
          this.isFirstSendClicked = true; // Marquer le bouton Envoyer comme déjà cliqué
        }
        this.OnsendButton();
      }
    });

    // Ajout d'un gestionnaire d'événements pour le clic sur la fenêtre pour activer le mode plein écran
    chatBox.addEventListener('click', () => this.toggleFullScreen(chatBox));
  }

  toggleState(chatbox: any) {
    this.state = !this.state;

    if (this.state) {
      chatbox.classList.add('chatbox--active');
    } else {
      chatbox.classList.remove('chatbox--active');
    }
  }

  // toggleFullScreen(chatbox: HTMLElement) {
  //   if (!document.fullscreenElement) {
  //     chatbox.requestFullscreen();
  //   } else {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     }
  //   }
  // }
  toggleFullScreen(chatbox: HTMLElement) {
    const chatBox: HTMLElement | null = document.querySelector('.chatbox__support');
    if (chatBox) {
      this.performFullScreenToggle(chatBox);
    } else {
      console.error('Chatbox element not found.');
    }
  }
  
  performFullScreenToggle(chatBox: HTMLElement) {
    if (!document.fullscreenElement) {
      chatBox.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  toggleChatbox() {
    const chatBox: HTMLElement | null = document.querySelector('.chatbox__support');
    if (chatBox) {
      this.toggleState(chatBox);
    } else {
      console.error('Chatbox element not found.');
    }
  }
//   display() {
//     const { openButton, chatBox, sendButton } = this.args;

//     openButton.addEventListener('click', () => this.toggleState(chatBox));

//     sendButton.addEventListener('click', () => this.OnsendButton());

//     const node = chatBox.querySelector('input');
//     node.addEventListener("keyup", (event: KeyboardEvent) => {
//       const { key } = event;
//       if (key === "Enter") {
//         this.OnsendButton();
//       }
//     });
//   }

//   toggleState(chatbox: any) {
//     this.state = !this.state;

//     if (this.state) {
//       chatbox.classList.add('chatbox--active');
//     } else {
//       chatbox.classList.remove('chatbox--active');
//     }
//   }

//   toggleChatbox() {
//     const chatBox: HTMLElement | null = document.querySelector('.chatbox__support');
//     if (chatBox) {
//         this.toggleState(chatBox);
//     } else {
//         console.error('Chatbox element not found.');
//     }
// }
OnsendButton() {
  const textField: HTMLInputElement = this.elementRef.nativeElement.querySelector('.chatbox__support input');
  const text1 = textField.value;
  if (text1 === "") {
    return;
  }

  let userMessage = { user: "User", message: text1 };
  this.messages.push(userMessage);

  const chatBox: HTMLElement | null = document.querySelector('.chatbox__support');

  if (!this.isFirstSendClicked) {
    this.toggleFullScreen(chatBox!); // Activer le mode plein écran pour la première fois que le bouton Envoyer est cliqué
    this.isFirstSendClicked = true; // Marquer le bouton Envoyer comme déjà cliqué
  }

  fetch('http://127.0.0.1:8000/api/predict/', {
    method: 'POST',
    body: JSON.stringify({ message: text1 }),
    mode: 'cors',
    headers:  { 'Content-Type': 'application/json; charset=utf-8' }
  })
  .then(r => r.json())
  .then(r => {
    let botMessage = { bot: "Sam", message: r.answer };
    this.messages.push(botMessage);
    textField.value = ''
    this.updateChatText(chatBox);
  }).catch((error) => {
    console.error('Error:', error);
    this.updateChatText(chatBox)
    textField.value = ''
  });
}

updateChatText(chatBox: HTMLElement | null) {
  var html = '';
  this.messages.slice().reverse().forEach(function(item, index) {
    if (item.name === "Sam") {
      html += '<div class="chatbox__messages messages__item messages__item--visitor">' + item.message + '</div>';
    } else {
      html += '<div class="chatbox__messages messages__item messages__item--operator">' + item.message + '</div>';
    }
  });
  const chatMessage = chatBox!.querySelector(".chatbox__messages messages__item  ");
    chatMessage!.innerHTML = html;
  }
}