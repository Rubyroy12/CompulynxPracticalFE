import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { MatTableExporterModule } from 'mat-table-exporter';
import { UsersRoutingModule } from './student-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { studentsAccountsComponent } from './studentsAccounts/studentsAccounts.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { UploadedusersComponent } from './uploadedusers/uploadedusers.component';
import { UserWigetsComponent } from './user-wigets/user-wigets.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SettingsComponent } from './settings/settings.component';
import { DataGenerationComponent } from './data-generation/data-generation.component';
import { DataProcessingComponent } from './data-processing/data-processing.component';
import { StudentReportsComponent } from './student-reports/student-reports.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
// import { MatTableExporterModule } from 'mat-table-exporter';


@NgModule({
  declarations: [
    studentsAccountsComponent,
    UploadedusersComponent,
    UpdateuserComponent,
    UserWigetsComponent,
    DeleteaccountComponent,
    SettingsComponent,
    DataGenerationComponent,
    DataProcessingComponent,
    StudentReportsComponent,
    FileUploadComponent


  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    // MatTableExporterModule,
    SharedModule,
    ComponentsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    // PerfectScrollbarModule

  ],
  providers: [DatePipe],

})
export class UsersModule { component }
