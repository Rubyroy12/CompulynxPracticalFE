import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Observable } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar.service';
// import * as XLSX from "xlsx";
import { ProcessingService } from '../processing.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-bulk-processing',
  templateUrl: './bulk-processing.component.html',
  styleUrls: ['./bulk-processing.component.sass']
})
export class BulkProcessingComponent implements OnInit {

  constructor(private snackbar: SnackbarService, private router: Router, private service: ProcessingService) { }

  ngOnInit(): void {
  }

  loading = false;
  valid: boolean = false;
  displayedColumns: string[] = [
    'id',
    'drAccount',
    'amount',
    'recptAcct',
    'benBank',
    'narration'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filter", { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };
  dataSource!: MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Excel Upload
  submit() {
    this.loading = true;
    this.service.initiateBulkProcessing(this.finalValues)
      .subscribe(
        (res) => {
          this.snackbar.showNotification(
            "snackbar-success", res.message
          );
          this.loading = false;
          this.router.navigate(['/initiator/process/history'])
        },
        (err) => {
          this.loading = false;
          this.snackbar.showNotification("snackbar-danger", err.message);
        }
      );
  }


  exceldata: [][] | undefined;

  fileName: any;

  excelSelected: any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = "";


  finalValues: any;

  typeIsSelected: boolean = false;

  datasize: any

  upload() {
    this.loading = true
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.service.upload(this.currentFile).subscribe(
      event => {

        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.loading = false
          this.message = event.body.message;
          if (event.body.statusCode == 200) {
            this.snackbar.showNotification("snackbar-success", this.message);
            console.log("DATA:  ", event.body.entity)
            this.finalValues = event.body.entity
            this.datasize = this.finalValues.length
            this.valid = true;
            this.dataSource = new MatTableDataSource<any>(this.finalValues);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

          } else {
            this.valid = false;
            this.snackbar.showNotification("snackbar-danger", this.message);

          }

        }
      },
      err => {
        this.loading = false
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload()
  }




}

