// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn: boolean = false;

  constructor() { }

  login() {
    // Logique de connexion
    this.isLoggedIn = true;
    // Vous pouvez également stocker des informations d'authentification, comme le jeton JWT, dans le stockage local
  }

  logout() {
    // Logique de déconnexion
    this.isLoggedIn = false;
    // Vous pouvez également effacer les informations d'authentification du stockage local lors de la déconnexion
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
    // Vous pouvez également vérifier l'état d'authentification en vérifiant les informations d'authentification stockées, comme le jeton JWT
  }
}
