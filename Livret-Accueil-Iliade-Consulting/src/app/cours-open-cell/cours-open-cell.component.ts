import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { EMPTY, Observable, catchError, tap, throwError } from 'rxjs';
import { OpencellService } from '../service/opencell.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

export interface Opencell {
  id: number;
  titre: string;
  description: string;
  iframelink: string;
}

@Component({
  selector: 'app-cours-open-cell',
  templateUrl: './cours-open-cell.component.html',
  styleUrls: ['./cours-open-cell.component.css'],

})

export class CoursOpenCellComponent implements OnInit {
  // isChefProjet = false;
  // isManager = false;
  // userRole: string;
  public opencell: Opencell[];
  public editOpencell: Opencell;
  public deleteOpencell: Opencell;

  public userRole: string;

  constructor(private opencellService: OpencellService, private http: HttpClient, private userService: UserService, private authService: AuthService // Inject AuthService
  ) { }
  ngOnInit(): void {
    this.getOpencell();
    // this.fetchUserRole(); // Initialize userRole and isManager
    // const userEmail = 'user@example.com'; // Retrieve user's email from storage or state
    // this.getUserRole(); // Fetch user's role when component initializes
    // this.userRole$ = this.authService.getUserRole().pipe(
    //   tap(role => {
    //     console.log('User role:', role);
    //     // Handle additional logic based on the role (e.g., update UI)
    //     // You can add more conditions or logic here
    //   })
    // );
    this.userRole = this.authService.getRole() || ''; // Assign an empty string if the retrieved value is null
    console.log(this.userRole);
  }
  
  // fetchUserRole(): void {
  //   this.authService.getUserRole()
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       alert(error.message);
  //       return EMPTY;
  //     })
  //   )
  //   .subscribe(() => {
  //     console.log("test")
  //   });
  // }
  
  public getOpencell(): void {
    this.opencellService.getOpencell()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return EMPTY;
        })
      )
      .subscribe((response: Opencell[]) => {
        this.opencell = response;
      });
  }
  // public getUserRole(): void {
  //   this.userService.getUserRole().subscribe(
  //     (role: string) => {
  //       this.userRole = role;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching user role:', error);
  //     }
  //   );
  // }



 

  public onAddOpencell(addForm: NgForm): void {
    document.getElementById('add-opencell-form')!.click();

    this.opencellService.addOpencell(addForm.value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
          return throwError(error);
        })
      )
      .subscribe((response: Opencell) => {
        console.log(response);
        this.getOpencell();
        addForm.reset();
      });
  }

  onUpdateOpencell(opencell: Opencell): void {
    this.opencellService.updateOpencell(opencell.id, opencell)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      )
      .subscribe((response: Opencell) => {
        console.log(response);
        this.getOpencell();
      });
  }

  public onDeleteOpencell(opencellId: number): void {
    this.opencellService.deleteOpencell(opencellId)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      )
      .subscribe((response: void) => {
        console.log(response);
        this.getOpencell();
      });
  }
  public onOpenModal(opencell: Opencell, mode: string): void {
    const container = document.getElementById('main-container');
    if (!container) {
      console.error("L'élément avec l'ID 'main-container' n'a pas été trouvé.");
      return;
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addOpencellModal');
    }
    if (mode === 'edit') {
      this.editOpencell = opencell;
      button.setAttribute('data-target', '#updateOpencellModal');
    }
    if (mode === 'delete') {
      this.deleteOpencell = opencell;
      button.setAttribute('data-target', '#deleteOpencellModal');
    }
    container.appendChild(button);
    button.click();
  }

}



