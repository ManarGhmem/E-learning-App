import { Component, OnInit } from '@angular/core';
import { CourService } from '../service/cours.service';
// import { Cour } from '../cour';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
// import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';
export interface Cour {
  id: number;
  titre: string;
  description: string;
  iframelink: string;
}
@Component({
  selector: 'app-nos-cours',
  templateUrl: './nos-cours.component.html',
  styleUrls: ['./nos-cours.component.css']
})

export class NosCoursComponent implements OnInit{
public cour: Cour[];
public editCour: Cour;
public deleteCour: Cour;
public userType: string;
public userRole: string;

constructor (private courService: CourService, private http: HttpClient, private userService: UserService,private router: Router, private authService: AuthService ){}
ngOnInit(): void {

     this.getCour();

this.userRole = this.authService.getRole() || ''; // Assign an empty string if the retrieved value is null
console.log(this.userRole);
}




public getCour(): void {
  this.courService.getCour()
    .pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.message);
        return EMPTY; // Retourne un observable vide pour que le flux continue
      })
    )
    .subscribe((response: Cour[]) => {
      this.cour = response;
    });
}


onAddCour(addForm: NgForm): void {
  document.getElementById('add-cour-form')!.click();
  
  this.courService.addCour(addForm.value)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        return throwError(error);
      })
    )
    .subscribe((response: Cour) => {
      console.log(response);
      this.getCour();
      addForm.reset();
    });
  }

// public onUpdateCour(cour: Cour): void {
//   this.courService.updateCour(cour.id,cour)
//     .pipe(
//       catchError((error: HttpErrorResponse) => {
//         alert(error.message);
//         return throwError(error);
//       })
//     )
//     .subscribe((response: Cour) => {
//       console.log(response);
//       this.getCour();
//     });
//   }
onUpdateCour(cour: Cour): void {
  this.courService.updateCour(cour.id, cour) // Passer l'identifiant du cours et l'objet cour
    .pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.message);
        return throwError(error);
      })
    )
    .subscribe((response: Cour) => {
      console.log(response);
      this.getCour();
    });
}
retourAccueil() {
  this.router.navigate(['/home']);
}

 onDeleteCour(id: number): void {
  this.courService.deleteCour(id)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.message);
        return throwError(error);
      })
    )
    .subscribe((response: Cour) => {
      console.log(response);
      this.getCour();
    });
  }

onOpenModal(cour: Cour, mode: string): void{
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
    button.setAttribute('data-target', '#addCourModal'); 
  }
  if (mode ==='edit')

  { this.editCour = cour;
    button.setAttribute('data-target', '#updateCourModal'); 
  }
  if (mode ==='delete')
  { this.deleteCour = cour;
    button.setAttribute('data-target', '#deleteCourModal'); 
  }
  container.appendChild(button);
  button.click();
}



// getUserType(email: string, password: string) {
//   this.AuthServiceService.getUserType(email, password)
//     .subscribe(
//       (data: any) => {
//         this.userType = data; // assuming data returned is the user type
//       },
//       (error) => {
//         console.error('Error fetching user type:', error);
//         // Handle error
//       }
//     );
// }





}

