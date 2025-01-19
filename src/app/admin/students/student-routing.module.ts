import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentsAccountsComponent } from './studentsAccounts/studentsAccounts.component';
import { DataGenerationComponent } from './data-generation/data-generation.component';
import { DataProcessingComponent } from './data-processing/data-processing.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StudentReportsComponent } from './student-reports/student-reports.component';

const routes: Routes = [
  {
    path: "",
    component: studentsAccountsComponent,
  },
  {
    path: "generate",
    component: DataGenerationComponent,
  },
 
  {
    path: "process",
    component: DataProcessingComponent,
  }, 
  {
    path: "upload",
    component: FileUploadComponent,
  },
  {
    path: "reports",
    component: StudentReportsComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule],
})
export class UsersRoutingModule { }
