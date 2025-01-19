import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { EntityService } from '../entity.service';
import { Subscription } from 'rxjs';
import { LogOut } from 'angular-feather/icons';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrl: './add-entity.component.sass'
})
export class AddEntityComponent implements OnInit {

  isFile: any
  imageSrc: string;
  file: File | null = null;
  loading = false;
  addEntityForm: FormGroup
  form: FormGroup
  subscription!: Subscription
  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private service: EntityService
  ) {

  }



  ngOnInit(): void {
    this.buildEntityForm()
    this.entityform()
  }

  buildEntityForm() {
    this.addEntityForm = this.fb.group(
      {
        phone: ["", [Validators.required]],
        name: ["", [Validators.required]],

        email: ["", [Validators.required]],

        type: ["", [Validators.required]],

        location: ["", [Validators.required]],

        parentId: [""],

      }
    )
  }
  entityform() {
    this.form = this.fb.group(
      {
        data: ["", [Validators.required]],
        file: ["", [Validators.required]]

      }
    )
  }


  onFileSelected(event: any): void {
    const infile = (event.target as HTMLInputElement);
    if(infile.files && infile.files.length>0){
      
      this.file=infile.files[0]

    }else{
      this.file=null
    }
  }
 

  onSubmit() {

    this.loading = true

    
  const formData = new FormData();

  // Append the JSON data as a string
  formData.append('data', JSON.stringify(this.addEntityForm.value));

  // Append the file
  if (this.file) {
    formData.append('file', this.file);
  }

    this.subscription = this.service.addNewEntity(formData).subscribe((res => {
      this.loading = false;
      console.log(res)
      if (res.status = "SUCCESS") {
        this.snackbar.showNotification("snackbar-success", res.message);
        this.addEntityForm.reset();
      } else {
        this.snackbar.showNotification("snackbar-danger", res.message);
      }

    }))

  }
}
