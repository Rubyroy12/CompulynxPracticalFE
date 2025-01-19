import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PesalinkService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/all`;
    return this.http.get(API_URL, httpOptions);
  }

  public getPendingTransactionCodes(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/tranCodes/pending`;
    return this.http.get(API_URL, httpOptions);
  }

  public getAllTransactionCodes(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/tranCodes/all`;
    return this.http.get(API_URL, httpOptions);
  }

  public getTransactionCodes(status:any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/tranCodes/`+status;
    return this.http.get(API_URL, httpOptions);
  }

  public getPendingTransactionsDates(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/dates/pending`;
    return this.http.get(API_URL, httpOptions);
  }

  public getProcessedTransactionsDates(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/dates/processed`;
    return this.http.get(API_URL, httpOptions);
  }

  public getAllTransactionsDates(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/dates/all`;
    return this.http.get(API_URL, httpOptions);
  }

  public pastTransactionsByStatus(status: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/filter`;
    return this.http.get(API_URL + `/status?status=${status}`, httpOptions);
  }

  public pastTransactionsByDate(date: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/filter/date`;
    return this.http.get(API_URL + `?date=${date}`, httpOptions);
  }

  public pastTransactionsByCode(code: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/filter/tranCode`;
    return this.http.get(API_URL + `?tranCode=${code}`, httpOptions);
  }


  public retryPosting(id: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/retry`;
    return this.http.get(API_URL + `/${id}`, httpOptions);
  }
  public filterTransactions(status: any,date:any,transacionCode:any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/pesalink/pesalink/data?status=`+status+`&date=`+date+`&tansacionCode=`+transacionCode;
    return this.http.get(API_URL, httpOptions);
  }
}
