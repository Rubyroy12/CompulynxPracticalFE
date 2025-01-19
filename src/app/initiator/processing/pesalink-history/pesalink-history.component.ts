import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ViewPesalinkInfoComponent } from '../view-pesalink-info/view-pesalink-info.component';
import { PesalinkService } from '../pesalink.service';
import { ReportsComponent } from 'src/app/reports/pages/reports/reports.component';
import { DatePipe } from '@angular/common';
import { ReportsService } from 'src/app/reports/reports.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-pesalink-history',
  templateUrl: './pesalink-history.component.html',
  styleUrls: ['./pesalink-history.component.scss'],
  providers: [DatePipe]
})
export class PesalinkHistoryComponent implements OnInit {

  displayedColumns: string[] = [
    "id",
    "DebitAcct",
    "crAcct",
    "tranAmount",
    "benBank",
    "tranDate",
    "status",
    "actions"
  ];

  dates: any;
  selected: any = "all";
  trancode: any = "All";
  status: any = "Pending";
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
    private service: PesalinkService,
    private dialog: MatDialog,
    private router: Router,
    private datePipe: DatePipe,
    private reportService: ReportsService
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
    this.getTranCodes(this.status);
    // this.getAllPastTransactions();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTranCodesOnChange() {
    this.getTranCodes(this.status)

  }
  getTranCodes(status) {
    this.service.getTransactionCodes(status).subscribe(
      (res) => {
        this.codes = res;
        console.log("TranCodes ", this.codes)
        if (this.codes != null) {
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
    console.log("Status", this.status);
    this.service.filterTransactions(this.status, this.currentDate, this.trancode).subscribe(
      (res) => {
        this.isLoading = false

        this.filteredData = res;
        console.log("Pesalink Data ", this.filteredData)

        this.dataSource = new MatTableDataSource<any>(this.filteredData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    );
  }




  filterByTransactionCode() {
    this.service.pastTransactionsByCode(this.trancode).subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource<any>(res);
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

  viewPesalinkInfo(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    dialogConfig.width = "65%"
    dialogConfig.data = {
      dt: row
    }
    this.dialog.open(ViewPesalinkInfoComponent, dialogConfig)
  }

  refresh() {
    this.getAllPastTransactions();
  }
  downloadReport(type: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.data = {
      type: type
    };
    const dialogRef = this.dialog.open(
      ReportsComponent,
      dialogConfig
    );

  }
  downloadPesalinkReport() {

    this.reportService.generatePesalinkReport(this.status, this.currentDate, this.trancode).subscribe(
      (response: Blob) => {
        this.isLoading = false
        const filename = 'download-' + this.status + "-" + this.trancode +"_"+this.currentDate+ '.xlsx'; // Specify the desired filename with the appropriate extension
        saveAs(response, filename);

      },
      error => {
        console.error('Failed to download report:', error);
      }
    );

  }
}