import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-file-upload',

  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.sass'
})
export class FileUploadComponent {
 loading = false;
  showForm = false;
  constructor(
    private studentService: StudentService,
    private snackbar: SnackbarService,

  ) {

  }

  ngOnInit(): void {
  }

  upload() {
    this.loading = true;
    this.studentService.upload().subscribe(
      (res) => {
        
        if (res.status == "SUCCESS") {
          this.snackbar.showNotification("snackbar-success",res.message);
              
        }else{
          this.snackbar.showNotification("snackbar-success",res.message);
        }
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.snackbar.showNotification("snackbar-danger", err);
      }
    );
  }

}


