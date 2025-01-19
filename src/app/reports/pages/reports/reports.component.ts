import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProcessingService } from 'src/app/verifier/processing/processing.service';
import { ReportsService } from '../../reports.service';
import { saveAs } from 'file-saver';
import { ProcessingHistoryComponent } from 'src/app/initiator/processing/processing-history/processing-history.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [DatePipe]
})
export class ReportsComponent implements OnInit {

  reportForm: FormGroup;
  pesalinkReportForm: FormGroup

  loading: Boolean = false
  tranStatus: any = "All";
  currentDate: string
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  constructor(
    private reportService: ReportsService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    public dialogref: MatDialogRef<ProcessingHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any




  ) {

  }

  ngOnInit(): void {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log("Type of report ", this.data.type)

    // if (this.data.type = "Processing") {
    this.reportForm = this.fb.group({
      status: ['', Validators.required],
      date: ['', Validators.required]

    })

    this.pesalinkReportForm = this.fb.group({
      status: ['', Validators.required],
      date: ['', Validators.required]

    })

  }
  close() {
    this.dialog.closeAll()
  }

  // downloadReport() {
  //   this.loading = true
  //   let status = ""
  //   let selectedDate = ""
  //   console.log("Current date and time ", this.currentDate)



  //   status = this.reportForm.value.status
  //   selectedDate = this.datePipe.transform(this.reportForm.value.date, 'yyyy-MM-dd');
  //   console.log("SELECTED DATE", selectedDate)

  //   this.reportService.generateProcessingReport(status, selectedDate).subscribe(
  //     (response: Blob) => {
  //       this.loading = false
  //       const filename = 'Download-' + status + "-" + this.currentDate + '.xlsx'; // Specify the desired filename with the appropriate extension
  //       saveAs(response, filename);
  //       this.close()
  //     },
  //     error => {
  //       console.error('Failed to download report:', error);
  //     }
  //   );


  // }
  // downloadPesalinkReport() {
  //   console.log("DATA ", this.pesalinkReportForm.value)
  //   let status = this.pesalinkReportForm.value.status
  //   let selectedDate = this.datePipe.transform(this.pesalinkReportForm.value.date, 'yyyy-MM-dd');
  //   console.log("SELECTED DATE", selectedDate)
  //   console.log("SELECTED status", status)
  //   this.reportService.generatePesalinkReport(status, selectedDate).subscribe(
  //     (response: Blob) => {
  //       this.loading = false
  //       const filename = 'download-' + status + "-" + this.currentDate + '.xlsx'; // Specify the desired filename with the appropriate extension
  //       saveAs(response, filename);
  //       this.close()
  //     },
  //     error => {
  //       console.error('Failed to download report:', error);
  //     }
  //   );

  // }
}

