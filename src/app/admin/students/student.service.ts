import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const studentsApi = `${environment.apiUrl}/api/v1/students`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

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
    upload(): Observable<any> {
      const uploadUrl = studentsApi+`/upload`
            return this.http.get<any>(uploadUrl);
    }
    delete(studentId:number): Observable<any> {
      const deleteUrl = studentsApi+`/delete?id=`+studentId
            return this.http.delete<any>(deleteUrl);
    }
}
