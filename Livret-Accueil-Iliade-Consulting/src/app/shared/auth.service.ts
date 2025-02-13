import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login() {
    // Implémentez ici la logique de connexion
    this.isLoggedIn = true;
  }

  logout() {
    // Implémentez ici la logique de déconnexion
    this.isLoggedIn = false;
  }
}