import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-data-generation',
  templateUrl: './data-generation.component.html',
  styleUrl: './data-generation.component.sass'
})
export class DataGenerationComponent implements OnInit {


  recordsForm: FormGroup;
  loading = false;
  showForm = false;
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private snackbar: SnackbarService,

  ) {

  }

  buildForm() {
    this.recordsForm = this.formBuilder.group({
      numberofrecords: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.buildForm()
  }

  openGeneratePrompt() {
    this.showForm = !this.showForm; // Toggle visibility
  }

  onSubmit() {
    this.loading = true;
    this.studentService.generate(
      this.recordsForm.value.numberofrecords
    ).subscribe(
      (res) => {
        
        if (res.status == "SUCCESS") {
          this.snackbar.showNotification("snackbar-success",res.message);
          this.showForm=false
          this.recordsForm.reset();
          
          
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
