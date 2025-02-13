import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Cour } from '../cour';
import { environment } from 'src/environments/environment';
import { Cour} from '../nos-cours/nos-cours.component'

@Injectable({providedIn: 'root'})
export class CourService {
  private Url = environment.apiBaseUrl;

  constructor(private http: HttpClient){}



 
  public getCour(): Observable<Cour[]> {
    return this.http.get<Cour[]>(`${this.Url}/api/cours/`);
  }

  public addCour(cour: Cour): Observable<Cour> {
    return this.http.post<Cour>(`${this.Url}/api/cours/`, cour);
  }

  // public updateCour(cour: Cour): Observable<Cour> {
  //   return this.http.put<Cour>(`${this.Url}/api/cours/`, cour);
  // }

  public deleteCour(id: number): Observable<Cour> {
    return this.http.delete<Cour>(`${this.Url}/api/cours/${id}`);
  }

  public updateCour( id:number ,cour: Cour): Observable<Cour> {
    return this.http.put<Cour>(`${this.Url}/api/cours/${id}`, cour);
  }
}