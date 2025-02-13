import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opencell } from '../cours-open-cell/cours-open-cell.component';

@Injectable({
  providedIn: 'root'
})
export class OpencellService {

  private Url = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getOpencell(): Observable<Opencell[]> {
    return this.http.get<Opencell[]>(`${this.Url}/api/cour_opencell/`);
  }
  public addOpencell(opencell: Opencell): Observable<Opencell> {
    return this.http.post<Opencell>(`${this.Url}/api/cour_opencell/`, opencell);
  }

  public updateOpencell(id:number , opencell: Opencell): Observable<Opencell> {
    return this.http.put<Opencell>(`${this.Url}/api/cour_opencell/${id}`,opencell);
  }

  public deleteOpencell(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/api/cour_opencell/${id}`);
  }

  getUserRole(): Observable<string> {
    return this.http.get<string>('/api/user-role/');
  }
}
