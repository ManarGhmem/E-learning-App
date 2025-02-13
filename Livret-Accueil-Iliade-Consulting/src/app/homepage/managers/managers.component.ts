import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent implements OnInit{
  isResponsive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Ajoute ici de la logique pour détecter la taille de l'écran
    // et définir isResponsive en fonction de cela, par exemple :
    this.isResponsive = window.innerWidth <= 768;
  }
}
