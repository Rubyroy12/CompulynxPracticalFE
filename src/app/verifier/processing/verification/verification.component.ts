import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcessingHistoryComponent } from '../processing-history/processing-history.component';
import { ProcessingService } from '../processing.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.sass']
})
export class VerificationComponent implements OnInit {

  loading = false;
  verificationForm: FormGroup;
  selected: any = "";

  constructor(public dialogRef: MatDialogRef<ProcessingHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private service: ProcessingService,
    private router: Router,
    private dialog: MatDialog,) { }
  subscription!: Subscription;
  tranCode: any;

  ngOnInit(): void {
    this.tranCode = this.data.dt;
    this.verificationForm = this.fb.group({
      remark: [""],
      action: [""],
    })
  }

  onSubmit() {
    this.loading = true;
    this.service.approveOrReject(this.tranCode, this.selected, this.verificationForm.value.remark).subscribe(
      res => {
      this.loading = false;
      this.snackbar.showNotification("snackbar-success", "Successful!");
      this.verificationForm.reset();
      this.router.navigate(['/verifier/process/dashboard']);
      this.dialogRef.close();
    }, err => {
      this.loading = false;
      this.snackbar.showNotification("snackbar-danger", err);
      this.dialogRef.close();
    }
    )
  }

  onClick() {
    this.dialogRef.close();
  }
}
