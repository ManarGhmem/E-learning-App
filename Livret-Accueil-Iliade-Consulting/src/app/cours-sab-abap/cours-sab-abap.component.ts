import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cours-sab-abap',
  templateUrl: './cours-sab-abap.component.html',
  styleUrls: ['./cours-sab-abap.component.css']
})
export class CoursSabAbapComponent {
  
  constructor(private http: HttpClient) { }

  downloadFile() {
    const fileUrl = 'URL_DU_FICHIER_DOC';
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(response => {
      this.saveFile(response);
    });
  }

  saveFile(response: any) {
    const blob = new Blob([response], { type: 'application/msword' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'nom_du_fichier.doc';
    downloadLink.click();
  }

}
