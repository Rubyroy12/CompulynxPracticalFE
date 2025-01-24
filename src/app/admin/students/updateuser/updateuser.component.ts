import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { studentsAccountsComponent } from '../studentsAccounts/studentsAccounts.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.sass']
})
export class UpdateuserComponent implements OnInit {

  studentForm: FormGroup;
  selectedFile: File | null = null;
  student: any = {};

  loading = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<studentsAccountsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.studentService.getBYId(this.data.student.studentId)
      .subscribe(
        (res) => {
          console.log("StudentbyId", res)
          this.student = res.data
          this.studentForm = this.updateAccountForm(this.student);
        });

  }


  updateAccountForm(student: any): FormGroup {
    return this.fb.group({
      firstName: [student?.firstName, [Validators.required]],
      lastName: [student.lastName, [Validators.required]],
      dob: [student.dob, [Validators.required]],
      studentClass: [student.studentClass, [Validators.required]],
      score: [student.score, [Validators.required]],
      status: [student.status, [Validators.required]],
      studentId: [student.studentId, [Validators.required]],
      photoPath: [student.photoPath],
    });
  }

  ngOnInit(): void {

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onCancel() {
    this.dialogRef.close();
  }

  updateUser() {
    this.loading = true;

    // If no file is selected, update user without a new file
    if (!this.selectedFile) {
      this.loading = false;
      this.snackbar.showNotification("snackbar-success", "File must be uploaded");

      return;
    }

    // Upload file first
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.studentService.uploadPhoto(formData).subscribe({
      next: (fileRes: any) => {

        if (fileRes.status = "SUCCSS") {

          this.studentForm.patchValue({ photoPath: fileRes.message });


          // Now update the user with the new photo path
          this.studentService.updateUser(this.studentForm.value).subscribe({
            next: (res) => {
              this.loading = false;
              console.info(res.data)

              this.snackbar.showNotification("snackbar-success", res.message);
              this.studentForm.reset();
              this.dialogRef.close();
            },
            error: (err) => {
              this.loading = false;
              this.snackbar.showNotification("snackbar-danger", err);
            }
          });
        }
      },
      error: (err) => {
        this.loading = false;
        this.snackbar.showNotification("snackbar-danger", err);
      }
    });
  }
}  