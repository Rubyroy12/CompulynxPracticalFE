import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  templateDownload(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/octet-stream');
    let requestOptions: any = { headers: headers, responseType: 'blob', withCredentials: false };
    let API_URL = `${environment.apiUrl}/api/v1/template/download`;
    return this.http.get(API_URL, requestOptions)
      .pipe(map((response) => {
        return {
          data: new Blob([response], { type: 'octet/stream' })
        };
      }));
  }


  public initiateBulkProcessing(data: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/initiate`;
    return this.http.post(API_URL, data, httpOptions);
  }

  public getAll(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/all`;
    return this.http.get(API_URL, httpOptions);
  }

  public getTransactionCodes(status:string): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/tranCodes/`+status;
    return this.http.get(API_URL, httpOptions);
  }

  public getProcessedTransactionCodes(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/tranCodes/processed`;
    return this.http.get(API_URL, httpOptions);
  }

  public getPendingTransactionsDates(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/dates/pending`;
    return this.http.get(API_URL, httpOptions);
  }

  public getProcessedTransactionsDates(): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/dates/processed`;
    return this.http.get(API_URL, httpOptions);
  }

  public pastTransactionsByStatus(status: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/filter`;
    return this.http.get(API_URL + `/${status}`, httpOptions);
  }

  public pastTransactionsByDate(date: any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/filter/date`;
    return this.http.get(API_URL + `?date=${date}`, httpOptions);
  }

  public filterTransactions(status: any,date:any,transacionCode:any): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/processing/data?status=`+status+`&date=`+date+`&tansacionCode=`+transacionCode;
    return this.http.get(API_URL, httpOptions);
  }


  approveOrReject(tranCode:any,action:any,remarks): Observable<any> {
    let API_URL = `${environment.apiUrl}/api/v1/processing/verify`;
    return this.http.get(API_URL+ `?tranCode=${tranCode}&action=${action}&remark=${remarks}`, httpOptions);
  }
  // uploadFile(file: File): Observable<any> {
  //   const formData: FormData = new FormData();
  //   let API_URL = `${environment.apiUrl}/api/v1/processing/upload`;
  //   formData.append('file', file);

  //   // Set headers for the file upload
  //   const headers = new HttpHeaders({
  //     'Accept': 'application/json'
  //   });

  //   // Use the FormData content type
  //   const options = {
  //     headers: headers
  //   };

  //   return this.http.post(API_URL, formData, options);
  // }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    let API_URL = `${environment.apiUrl}/api/v1/processing/upload`;

    formData.append('file', file);

    const req = new HttpRequest('POST', API_URL, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
