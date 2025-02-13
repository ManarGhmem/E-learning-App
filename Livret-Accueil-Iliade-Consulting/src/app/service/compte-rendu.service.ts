// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class CompteRenduService {
//   private apiServerUrl = environment.apiBaseUrl;

//   constructor(private http: HttpClient){}
 
//   public getCompte_rendu(): Observable<Compte_rendu[]> {
//     return this.http.get<Compte_rendu[]>(`${this.apiServerUrl}/api/compte_rendu`);
//   }

//   public addCompte_rendu(compte_rendu: Compte_rendu): Observable<Compte_rendu> {
//     return this.http.post<Compte_rendu>(`${this.apiServerUrl}/api/compte_rendu/add`, compte_rendu);
//   }

//   public updateCompte_rendu(compte_rendu: Compte_rendu): Observable<Compte_rendu> {
//     return this.http.put<Compte_rendu>(`${this.apiServerUrl}/api/compter_endu/update/${compte_rendu.id}`, compte_rendu);
//   }

//   public deleteCompte_rendu(compte_renduId: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiServerUrl}/api/compte_rendu/delete/${compte_renduId}`);
//   }
// }