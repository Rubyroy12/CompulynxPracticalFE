import { Component, Inject, OnInit } from '@angular/core';
import { PesalinkHistoryComponent } from '../pesalink-history/pesalink-history.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { PesalinkService } from '../pesalink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retry-component',
  templateUrl: './retry-component.component.html',
  styleUrls: ['./retry-component.component.sass']
})
export class RetryComponentComponent implements OnInit {

  loading = false;
  verificationForm: FormGroup;
  selected: any = "";

  constructor(public dialogRef: MatDialogRef<PesalinkHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private router: Router,
    private service: PesalinkService,
    private dialog: MatDialog,) { }
  subscription!: Subscription;
  tranCode: any;

  ngOnInit(): void {
    this.tranCode = this.data.dt.transactionCode;
  }

  onSubmit() {
    this.loading = true;
    this.service.retryPosting(this.data.dt.messageId).subscribe(res => {
      this.loading = false;
      this.snackbar.showNotification("snackbar-success", "Successful!");
      this.verificationForm.reset();
      this.dialogRef.close();
      this.router.navigate(['/verifier/process/dashboard'])
    }, err => {
      this.loading = false;
      this.snackbar.showNotification("snackbar-danger", err);
      this.dialogRef.close();
    })
  }

  onClick() {
    this.dialogRef.close();
  }
}
