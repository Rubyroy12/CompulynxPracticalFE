import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class EntityService {


  constructor(private http: HttpClient) { }

  entityURL = `${environment.apiUrl}/api/v1/entity/`;


  public getEntities(): Observable<any> {
    return this.http.get(this.entityURL);
  }

  addNewEntity(data: any): Observable<any> {
    return this.http.post(this.entityURL + 'add', data);
  }

  deleteEntity(id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
    return this.http.delete(this.entityURL + `delete/` + id, httpOptions);
  }

  updateEntity(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
    return this.http.put(this.entityURL + `update`, data, httpOptions);
  }

}
