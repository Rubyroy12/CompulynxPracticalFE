import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const studentsApi = `${environment.apiUrl}/api/v1/students`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) {

  }

  generate(noOfrecords): Observable<any> {
    const generateUrl = studentsApi + `/generate?numberofrecords=` + noOfrecords
    return this.http.get<any>(generateUrl, httpOptions);

  }
  process(): Observable<any> {
    const processurl = studentsApi + `/process`
    return this.http.get<any>(processurl, httpOptions);
  }
  upload(): Observable<any> {
    const uploadUrl = studentsApi + `/upload`
    return this.http.get<any>(uploadUrl, httpOptions);
  }
  delete(studentId: number): Observable<any> {
    const deleteUrl = studentsApi + `/delete?id=` + studentId
    return this.http.delete<any>(deleteUrl, httpOptions);
  }
  allStudentsBycClass(studentClass: string): Observable<any> {
    return this.http.get(studentsApi + '/class?studentClass=' + studentClass, httpOptions);
  }
  getBYId(id: string): Observable<any> {
    return this.http.get(studentsApi + '/' + id, httpOptions);
  }
  exportStudentsByDOBRange(startDate: string, endDate: string): Observable<HttpResponse<Blob>> {
    const params = {
      startDate: startDate,
      endDate: endDate
    };

    return this.http.get<Blob>(studentsApi, {
      headers: new HttpHeaders(),
      params: params,
      observe: 'response',
      responseType: 'blob' as 'json'
    });
  }

}
