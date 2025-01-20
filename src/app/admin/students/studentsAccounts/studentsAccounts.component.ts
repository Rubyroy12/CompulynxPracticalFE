import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { DeleteaccountComponent } from '../deleteaccount/deleteaccount.component';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentsAccounts',
  templateUrl: './studentsAccounts.component.html',
  styleUrls: ['./studentsAccounts.component.scss']
})
export class studentsAccountsComponent implements OnInit {

  displayedColumns: string[] = [
    "studentId",
    "firstName",
    "lastName",
    "dob",
    "studentClass",
    "score",
    "status",
    "actions"
  ];

  selected = 'all';
  students: any;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  index: number;
  id: number;
  isLoading = true;
  isdata: boolean;
  studentIdFilter: string = '';


  constructor(
    private accountService: AuthService,
    private studentService: StudentService,
    public dialog: MatDialog,
    private snackbar: SnackbarService,
    private router: Router
  ) {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filter", { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };

  ngOnInit(): void {
    this.getAllStudents();
  }

  refresh() {
    this.getAllStudents();
  }

  fetchData() {

    this.getAllStudentsByClass(this.selected);

  }

  getAllStudents() {
    this.accountService.allStudents()
      .subscribe(
        (res) => {
          this.students = res.data;
          if (this.students.length > 0) {
            this.isLoading = false;
            this.isdata = true;
            this.dataSource = new MatTableDataSource<any>(this.students);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          else {
            this.isdata = false;
            this.dataSource = new MatTableDataSource<any>(this.students);
          }
        }
      );
  }
  getAllStudentsByClass(sclass: any) {
    console.log("Selected class ", sclass)
    this.studentService.allStudentsBycClass(sclass)
      .subscribe(
        (res) => {
          this.students = res.data;
          if (this.students.length > 0) {
            this.isLoading = false;
            this.isdata = true;
            this.dataSource = new MatTableDataSource<any>(this.students);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          else {
            this.isdata = false;
            this.dataSource = new MatTableDataSource<any>(this.students);
          }
        }
      );
  }
  getById(id: any) {

  }


  applyStudentIdFilter() {
    if (this.studentIdFilter.trim()) {
      // Find the record that matches the studentIdFilter

      this.studentService.getBYId(this.studentIdFilter.trim())
        .subscribe(
          (res) => {
            this.students = new Array(res.data);
            console.log(this.students)
            if (this.students)
              this.isdata = true;
            this.dataSource = new MatTableDataSource<any>(this.students);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

          }
        );
    } else {
      // If the filter is empty, show all records
      this.getAllStudents();
    }
  }



  editCall(user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      user,
    };
    const dialogRef = this.dialog.open(UpdateuserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllStudents();
    });
  }




  deleteDetailsCall(user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.data = {
      user,
    };
    const dialogRef = this.dialog.open(DeleteaccountComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllStudents();
    });
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // context menu
  onContextMenu(event: MouseEvent, item: any) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }
}