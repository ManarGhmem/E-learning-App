import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { modeOperatoire } from '../mode-operatoire/mode-operatoire.component'
@Injectable({
  providedIn: 'root'
})
export class ModeoperatoireTotalService {


  private Url = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
  public getmodeOperatoire(): Observable<modeOperatoire[]> {
    return this.http.get<modeOperatoire[]>(`${this.Url}/api/project_total/`);
  }
  public addmodeOperatoire(modeOperatoire: modeOperatoire): Observable<modeOperatoire> {
    return this.http.post<modeOperatoire>(`${this.Url}/api/project_total/`, modeOperatoire);
  }

  public updatemodeOperatoire(modeOperatoire: modeOperatoire): Observable<modeOperatoire> {
    return this.http.put<modeOperatoire>(`${this.Url}/api/project_total/${modeOperatoire.id}`,modeOperatoire);
  }

  public deletemodeOperatoire(modeOperatoireId: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/api/project_total/${modeOperatoireId}`);
  }
}
