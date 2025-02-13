import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})

export class ProjectService {


  
  private baseUrl = 'http://localhost:8000/api/';
  private apiUr = 'http://localhost:8000/api/projects/';


  constructor(private http: HttpClient,authservice:AuthService) { }

  getProjectsByType(projectType: string): Observable<Project[]> {
    const url = `${this.baseUrl}projects/${projectType}/`;
    return this.http.get<Project[]>(url);
  }

  deleteProject(projectId: number): Observable<any> {
    const url = `${this.apiUr}${projectId}/`;
    return this.http.delete(url);
  }


  // checkProjectAccess(projectId: number): Observable<any> {
  //   console.log(projectId)
  //   return this.http.get<any>(`${this.baseUrl}check_access/${projectId}/`);
  // }  

  checkProjectAccess(projectId: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}check_access/${projectId}/`, { headers });
  }

  // createProject(project: Project): Observable<Project> {
  //   return this.http.post<Project>(`${this.baseUrl}/projects/`, project)
  //     .pipe(
  //       catchError((error) => {
  //         console.error('Error creating project:', error);
  //         return throwError(error);
  //       })
  //     );
  // }



}


export interface Project {
  id: number;
  name: string;
  description: string;
  chef_projet: number; // Assuming chef_projet is the ID of the user
  users: number[]; // Assuming users is an array of user IDs
  project_type: string;
  image_projet:string;
}