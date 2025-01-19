import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  generateProcessingReport(status:any,date:any,transactionCode:any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    let API_URL = `${environment.apiUrl}/api/v1/reports/export?status=`+status +`&date=`+date+`&transactionCode=`+transactionCode;
    console.log(API_URL)
    return this.http.get(API_URL, { headers, responseType: 'blob' });
  }
  
  generatePesalinkReport(status:any,date:any,transactionCode:any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    let API_URL = `${environment.apiUrl}/api/v1/reports/export/pesalink?status=`+status+`&date=`+date+ `&transactionCode=`+transactionCode;
    console.log(API_URL)
    return this.http.get(API_URL, { headers, responseType: 'blob' });
  }
}
