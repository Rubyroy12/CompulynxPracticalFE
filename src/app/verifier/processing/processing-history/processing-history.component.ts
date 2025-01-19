import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProcessingService } from '../processing.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewTransactionComponent } from '../view-transaction/view-transaction.component';
import { ReportsComponent } from 'src/app/reports/pages/reports/reports.component';
import { DatePipe } from '@angular/common';
import { ReportsService } from 'src/app/reports/reports.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-processing-history',
  templateUrl: './processing-history.component.html',
  styleUrls: ['./processing-history.component.scss'],
  providers: [DatePipe]

})
export class ProcessingHistoryComponent implements OnInit {
[x: string]: any;
  displayedColumns: string[] = [
    "id",
    "DebitAcct",
    "crAcct",
    "tranAmount",
    "benBank",
    "tranDate",
    "initiatedBy",
    "status",
    "actions"
  ];

  dates: any;
  selected: any = "all";
  trancode: any = "All";
  tranStatus: any = "Pending";
  data: any;
  codes: any;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  index: number;
  id: number;
  isLoading = true;
  filteredData: any;
  currentDate: any


  constructor(
    private service: ProcessingService,
    private dialog: MatDialog,
    private router: Router,
    private datePipe: DatePipe,
    private reportService:ReportsService
  ) {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filter", { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };

  ngOnInit(): void {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.getTranCodes(this.tranStatus);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getTranCodesOnChange(){
    this.getTranCodes(this.tranStatus)

  }


  getTranCodes(status) {
    this.service.getTransactionCodes(status).subscribe(
      (res) => {
        this.codes = res;
        if (this.codes !=null) {
          this.trancode = this.codes[0]
          this.filterProcessingTransactions();
        } else {
          this.dataSource = new MatTableDataSource<any>([]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }






  filterProcessingTransactions() {
    this.isLoading = true
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    console.log("TransactionCodes ", this.trancode);
    console.log("ToDay ", this.currentDate);
    console.log(this.tranStatus);
    this.service.filterTransactions(this.tranStatus, this.currentDate, this.trancode).subscribe(
      (res) => {
        this.isLoading = false
          
        this.filteredData = res;
        
        this.dataSource = new MatTableDataSource<any>(this.filteredData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
      }
    );
  }

  getPastTransactionsByDate(date: any) {
    this.service.pastTransactionsByDate(date.split("T")[0]).subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  getAllPastTransactions() {
    if (this.selected == "all") {
      this.service.getAll()
        .subscribe(
          (res) => {
            this.data = res;
            if (this.data) {
              
              this.isLoading = false;
            }
            this.dataSource = new MatTableDataSource<any>(this.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        );
    }
    else {
      this.getPastTransactionsByDate(this.selected);
    }
  }

  viewDetails(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    // dialogConfig.disableClose = true
    dialogConfig.width = "60%"
    dialogConfig.data = {
      dt: row
    }
    this.dialog.open(ViewTransactionComponent, dialogConfig)
  }

  downloadReport() {
    this.isLoading = true
    
    console.log("Current date and time ", this.currentDate)

    this.reportService.generateProcessingReport(this.tranStatus, this.currentDate,this.trancode).subscribe(
      (response: Blob) => {
        this.isLoading = false
        const filename = 'download-' + this.tranStatus + "-" + this.trancode +"_"+this.currentDate+ '.xlsx'; // Specify the desired filename with the appropriate extension
        saveAs(response, filename);
       
      },
      error => {
        console.error('Failed to download report:', error);
      }
    );


  }
}
