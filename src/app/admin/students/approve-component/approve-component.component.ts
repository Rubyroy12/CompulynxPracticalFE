import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { studentsAccountsComponent } from '../studentsAccounts/studentsAccounts.component';

@Component({
  selector: 'app-approve-component',
  templateUrl: './approve-component.component.html',
  styleUrl: './approve-component.component.sass'
})
export class ApproveComponentComponent implements OnInit {


  form: FormGroup
  loading = false;



  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<studentsAccountsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      studentId: [ "",],
      status: ["", [Validators.required]],
      reason: [""],
    });

    // Watch for changes in the status field
    this.form.get('status')?.valueChanges.subscribe(status => {
      if (status === 'REJECTED') {
        this.form.get('reason')?.setValidators([Validators.required]);
      } else {
        this.form.get('reason')?.clearValidators();
      }
      this.form.get('reason')?.updateValueAndValidity();
    });
  }



  ngOnInit(): void {
    console.log(this.data.student)

  }

  approve() {
    
    this.form.value.studentId=this.data.student?.studentId
    console.info(this.form.value)
    this.service.approve(this.form.value)
      .subscribe(
        (res) => {
          if (res.status = "SUCCESS") {
            this.snackbar.showNotification("snackbar-success", res.message);
            this.form.reset();
            this.dialogRef.close();
          }
        }
      )
  }
  onCancel() {
    this.dialogRef.close()
  }
}
