import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { studentsAccountsComponent } from '../studentsAccounts/studentsAccounts.component';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.sass']
})
export class UpdateuserComponent implements OnInit {

  userForm: FormGroup;
  roles: any;
  departments: any;
  senior: any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AuthService,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<studentsAccountsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.userForm = this.updateAccountForm();
   }


  updateAccountForm(): FormGroup {
    return this.fb.group({
      firstName: [this.data.student.firstName, [Validators.required]],
      lastName: [this.data.student.lastName, [Validators.required]],
      dob: [this.data.student.dob, [Validators.required]],
      studentClass: [this.data.student.studentClass, [Validators.required]],
      score: [this.data.student.score, [Validators.required]],
      status: [this.data.student.status, [Validators.required]],
      studentId: [this.data.student.studentId, [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.data.student.stde)
  }

  onCancel() {
    this.dialogRef.close();
  }

  updateUser() {
    this.loading = true;
    this.accountService.updateUser({
      firstname: this.userForm.value.firstname,
      lastname: this.userForm.value.lastname,
      username: this.userForm.value.username,
      phonenumber: this.userForm.value.phonenumber,
      email: this.userForm.value.email,
      id:this.userForm.value.id,
      reportingTo: this.userForm.value.reportingTo,
    }).subscribe(
      (res) => {
        this.loading = false;
        this.snackbar.showNotification("snackbar-success", "SUCCESSFUL!");
        this.userForm.reset();
        this.dialogRef.close();
      },
      (err) => {
        this.loading = false;
        this.snackbar.showNotification("snackbar-danger", err);
      }
    );
  }



}
