import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingRoutingModule } from './processing-routing.module';
import { BulkProcessingComponent } from './bulk-processing/bulk-processing.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { MatTableExporterModule } from 'mat-table-exporter';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TemplateAndInstructionsComponent } from './template-and-instructions/template-and-instructions.component';
import { ProcessingHistoryComponent } from './processing-history/processing-history.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { ViewPesalinkInfoComponent } from './view-pesalink-info/view-pesalink-info.component';
import { PesalinkHistoryComponent } from './pesalink-history/pesalink-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    BulkProcessingComponent,
    TemplateAndInstructionsComponent,
    ProcessingHistoryComponent,
    ViewTransactionComponent,
    ViewPesalinkInfoComponent,
    PesalinkHistoryComponent,
  ],
  imports: [
    CommonModule,
    ProcessingRoutingModule,
    SharedModule,
    ComponentsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    // MatTableExporterModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    // PerfectScrollbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ProcessingModule { }
