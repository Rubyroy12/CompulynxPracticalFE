import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { studentsAccountsComponent } from '../studentsAccounts/studentsAccounts.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.sass']
})
export class DeleteaccountComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<studentsAccountsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: SnackbarService,
    private service: StudentService) { }

  name: any;
  subscription!: Subscription;
  loading = false;

  ngOnInit(): void {
    this.name = this.data.user.firstName;
    console.log(this.data.user.studentId)


  }

  onDelete() {
    this.loading = true;
    this.subscription = this.service.delete(this.data.user.studentId).subscribe(res => {
      this.loading = false;
      this.snackbar.showNotification("snackbar-success", res.message);
      this.dialogRef.close();
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
