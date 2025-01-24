import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { StsService } from '../sts.service';

@Component({
  selector: 'app-selected-students',
  templateUrl: './selected-students.component.html',
  styleUrls: ['./selected-students.component.sass']
})
export class SelectedStudentsComponent implements OnInit {

  displayedColumns: string[] = [
    "studentId",
    "firstName",
    "lastName",
    "dob",
    "studentClass",
    "score",
    "status",
    "state",
  ];

  dataSource = new MatTableDataSource<any>([]);
  isLoading = true;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild("filter", { static: true }) filter!: ElementRef;
  @ViewChild(MatMenuTrigger) contextMenu!: MatMenuTrigger;

  contextMenuPosition = { x: "0px", y: "0px" };

  

  constructor( private stsService: StsService,) {}

  ngOnInit(): void {
    this.stsService.selectedStudents$.subscribe(students => {
      this.dataSource = new MatTableDataSource(students);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // this.isLoading = false;
    });
  
  }
}
