import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMPTY, catchError, throwError } from 'rxjs';
import { ModeoperatoireTotalService } from '../service/modeoperatoire-total.service';


export interface modeOperatoire {
  id: number;
  name: string;
  description: string;
  iframeLink: string;
}
@Component({
  selector: 'app-mode-operatoire',
  templateUrl: './mode-operatoire.component.html',
  styleUrls: ['./mode-operatoire.component.css']
})
export class ModeOperatoireComponent implements OnInit{
  public modeOperatoire: modeOperatoire[];
  public editmodeOperatoire: modeOperatoire;
  public deletemodeOperatoire: modeOperatoire;
  
  
  constructor (private modeOperatoireService: ModeoperatoireTotalService){}
  ngOnInit(): void {
      this.getmodeOperatoire();
  }
  
  public getmodeOperatoire(): void {
    this.modeOperatoireService.getmodeOperatoire()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return EMPTY; // Retourne un observable vide pour que le flux continue
        })
      )
      .subscribe((response: modeOperatoire[]) => {
        this.modeOperatoire = response;
      });
  }
  
  
  public onAddmodeOperatoire(addForm: NgForm): void {
    document.getElementById('add-modeOperatoire-form')!.click();
    
    this.modeOperatoireService.addmodeOperatoire(addForm.value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          return throwError(error);
        })
      )
      .subscribe((response: modeOperatoire) => {
        console.log(response);
        this.getmodeOperatoire();
        addForm.reset();
      });
    }
  
  public onUpdatemodeOperatoire(modeOperatoire: modeOperatoire): void {
    this.modeOperatoireService.updatemodeOperatoire(modeOperatoire)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      )
      .subscribe((response: modeOperatoire) => {
        console.log(response);
        this.getmodeOperatoire();
      });
    }
  
  public onDeletemodeOperatoire(modeOperatoireId: number): void {
    this.modeOperatoireService.deletemodeOperatoire(modeOperatoireId)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      )
      .subscribe((response: void) => {
        console.log(response);
        this.getmodeOperatoire();
      });
    }
  public onOpenModal(modeOperatoire: modeOperatoire, mode: string): void{
    const container = document.getElementById('main-container');
    if (!container) {
      console.error("L'élément avec l'ID 'main-container' n'a pas été trouvé.");
      return;
    }
    const button = document.createElement( 'button');
    button.type='button';
    button.style.display= 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode ==='add')
    {
      button.setAttribute('data-target', '#addmodeOperatoireModal'); 
    }
    if (mode ==='edit')
  
    { this.editmodeOperatoire =modeOperatoire;
      button.setAttribute('data-target', '#updatemodeOperatoireModal'); 
    }
    if (mode ==='delete')
    { this.deletemodeOperatoire = modeOperatoire;
      button.setAttribute('data-target', '#deletemodeOperatoireModal'); 
    }
    container.appendChild(button);
    button.click();
  }}
  
  

