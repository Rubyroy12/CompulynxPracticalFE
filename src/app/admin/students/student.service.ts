import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const studentsApi = `${environment.apiUrl}/api/v1/students`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {

  }

    generate(noOfrecords): Observable<any> {
      const generateUrl = studentsApi+`/generate?numberofrecords=`+noOfrecords
      return this.http.get<any>(generateUrl);
    }
    process(): Observable<any> {
      const processurl = studentsApi+`/process`
            return this.http.get<any>(processurl);
    }
}
