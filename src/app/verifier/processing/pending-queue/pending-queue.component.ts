import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProcessingService } from '../processing.service';
import { VerificationComponent } from '../verification/verification.component';
import { ViewTransactionComponent } from '../view-transaction/view-transaction.component';

@Component({
  selector: 'app-pending-queue',
  templateUrl: './pending-queue.component.html',
  styleUrls: ['./pending-queue.component.scss']
})
export class PendingQueueComponent implements OnInit {
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
  data: any;
  codes: any;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  index: number;
  id: number;
  isLoading = true;
  filteredData: any;


  constructor(
    private service: ProcessingService,
    private dialog: MatDialog,
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
    this.getDates();
    this.getTranCodes();
    this.getAllPastTransactions();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDates() {
    this.service.getPendingTransactionsDates().subscribe(
      (res) => {
        this.dates = res;
      }
    );
  }

  getTranCodes() {
    this.service.getPendingTransactionCodes().subscribe(
      (res) => {
        this.codes = res;
      }
    );
  }


  filterByTransactionCode() {
    this.service.pastTransactionsByCode(this.trancode).subscribe(
      (res) => {
        this.filteredData = res;
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
      this.service.pastTransactionsByStatus("Pending")
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

  verifyCall() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    dialogConfig.width = "35%"
    dialogConfig.data = {
      dt: this.trancode
    }
    this.dialog.open(VerificationComponent, dialogConfig)
  }

  viewDetails(row)
  {
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
}
