import { Component, Inject, OnInit } from '@angular/core';
import { ProcessingHistoryComponent } from '../processing-history/processing-history.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-pesalink-info',
  templateUrl: './view-pesalink-info.component.html',
  styleUrls: ['./view-pesalink-info.component.sass']
})
export class ViewPesalinkInfoComponent implements OnInit {

  transactionForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProcessingHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.transactionForm = this.tranDetailsForm();
   }

   tranDetailsForm(): FormGroup {
    return this.fb.group({
      debitAccount: [this.data.dt.debitAccount],
      recipientType: [this.data.dt.recipientType],
      recipientAccount: [this.data.dt.recipientAccount],
      beneficiaryBankName: [this.data.dt.beneficiaryBankName],
      beneficiaryBankCode: [this.data.dt.beneficiaryBankCode],
      narration: [this.data.dt.narration],
      id: [this.data.dt.id],
      amount: [this.data.dt.amount],
      chargeAmount: [this.data.dt.chargeAmount],
      edutyAmount: [this.data.dt.edutyAmount],
      transactionCode: [this.data.dt.transactionCode],
      recipientName: [this.data.dt.recipientName],
      senderName: [this.data.dt.senderName],
    });
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
