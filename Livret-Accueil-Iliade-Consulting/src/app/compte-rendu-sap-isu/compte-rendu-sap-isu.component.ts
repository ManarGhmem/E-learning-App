// import { Component, OnInit } from '@angular/core';
// import { Compte-renduService } from '../service/compte-rendu.service';

// export interface Compte_rendu {
//   id: number;
//   name: string;
//   description: string;
//   iframeLink: string;
// }
// @Component({
//   selector: 'app-compte-rendu-sap-isu',
//   templateUrl: './compte-rendu-sap-isu.component.html',
//   styleUrls: ['./compte-rendu-sap-isu.component.css']
// })
// export class CompteRenduSapIsuComponent implements OnInit{
//   public cour: Compte_rendu[];
//   public editCour: Compte_rendu;
//   public deleteCour: Compte_rendu;
  
  
//   constructor (private compte-renduService: Compte-renduService){}
//   ngOnInit(): void {
//       this.getCompte-rendu();
//   }
  
//   public getCompte-rendu(): void {
//     this.courService.getCompte-rendu()
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           alert(error.message);
//           return EMPTY; // Retourne un observable vide pour que le flux continue
//         })
//       )
//       .subscribe((response: Cour[]) => {
//         this.cour = response;
//       });
//   }
  
  
//   public onAddCour(addForm: NgForm): void {
//     document.getElementById('add-cour-form')!.click();
    
//     this.courService.addCour(addForm.value)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           alert(error.message);
//           addForm.reset();
//           return throwError(error);
//         })
//       )
//       .subscribe((response: Cour) => {
//         console.log(response);
//         this.getCour();
//         addForm.reset();
//       });
//     }
  
//   public onUpdateCour(cour: Cour): void {
//     this.courService.updateCour(cour)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           alert(error.message);
//           return throwError(error);
//         })
//       )
//       .subscribe((response: Cour) => {
//         console.log(response);
//         this.getCour();
//       });
//     }
  
//   public onDeleteCour(courId: number): void {
//     this.courService.deleteCour(courId)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           alert(error.message);
//           return throwError(error);
//         })
//       )
//       .subscribe((response: void) => {
//         console.log(response);
//         this.getCour();
//       });
//     }
//   public onOpenModal(cour: Cour, mode: string): void{
//     const container = document.getElementById('main-container');
//     if (!container) {
//       console.error("L'élément avec l'ID 'main-container' n'a pas été trouvé.");
//       return;
//     }
//     const button = document.createElement( 'button');
//     button.type='button';
//     button.style.display= 'none';
//     button.setAttribute('data-toggle', 'modal');
//     if (mode ==='add')
//     {
//       button.setAttribute('data-target', '#addCourModal'); 
//     }
//     if (mode ==='edit')
  
//     { this.editCour = cour;
//       button.setAttribute('data-target', '#updateCourModal'); 
//     }
//     if (mode ==='delete')
//     { this.deleteCour = cour;
//       button.setAttribute('data-target', '#deleteCourModal'); 
//     }
//     container.appendChild(button);
//     button.click();
//   }
// }
  
  