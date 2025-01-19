import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { DepartmentsService } from '../../departments/departments.service';
import { UseraccountsComponent } from '../useraccounts/useraccounts.component';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrls: ['./updatedepartment.component.sass']
})
export class UpdatedepartmentComponent implements OnInit {

  updateDepartmentForm: FormGroup;
  roles: any;
  departments: any;
  senior: any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private departmentsService:DepartmentsService,
    private accountService: AuthService,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<UseraccountsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.updateDepartmentForm = this.updateUserDepartmentForm();
  }

  updateUserDepartmentForm(): FormGroup {
    return this.fb.group({
      department: ['', [Validators.required]],
      username: [this.data.user.username, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.departmentsService.getDepartments()
      .subscribe(
        (res) => {
          this.departments = res.entity;
        },
        (err) => {
          this.snackbar.showNotification("snackbar-danger", err);
        }
      );
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.loading = true;
    this.accountService.updateUserDepartment({
      department: this.updateDepartmentForm.value.department,
      username: this.updateDepartmentForm.value.username,
    }).subscribe(
      (res) => {
        this.loading = false;
        this.snackbar.showNotification("snackbar-success", "SUCCESSFUL!");
        this.updateDepartmentForm.reset();
        this.dialogRef.close();
      },
      (err) => {
        this.loading = false;
        this.snackbar.showNotification("snackbar-danger", err);
      }
    );

  }
}
