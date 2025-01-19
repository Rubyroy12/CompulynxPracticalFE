import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-data-processing',

  templateUrl: './data-processing.component.html',
  styleUrl: './data-processing.component.sass'
})
export class DataProcessingComponent {


  loading = false;
  showForm = false;
  constructor(
    private studentService: StudentService,
    private snackbar: SnackbarService,

  ) {

  }

  ngOnInit(): void {
  }

  startProcessing() {
    this.loading = true;
    this.studentService.process().subscribe(
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


