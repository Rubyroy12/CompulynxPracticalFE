import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StsService {

  private selectedStudentsSource = new BehaviorSubject<any[]>([]);
  private averageScoreSource = new BehaviorSubject<any>(0);
  selectedStudents$ = this.selectedStudentsSource.asObservable();
  averageScore$ = this.averageScoreSource.asObservable(); 


  updateSelectedStudents(responseData: any) {
    if (responseData?.studentList) {
      this.selectedStudentsSource.next(responseData.studentList);
      this.averageScoreSource.next(responseData.average); 

    }
  }
 
  constructor() { }
}
