import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingRoutingModule } from './processing-routing.module';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessingHistoryComponent } from './processing-history/processing-history.component';
import { VerificationComponent } from './verification/verification.component';
import { PendingQueueComponent } from './pending-queue/pending-queue.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { ViewPesalinkInfoComponent } from './view-pesalink-info/view-pesalink-info.component';
import { PesalinkHistoryComponent } from './pesalink-history/pesalink-history.component';
import { RetryComponentComponent } from './retry-component/retry-component.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    ProcessingHistoryComponent,
    VerificationComponent,
    PendingQueueComponent,
    ViewTransactionComponent,
    ViewPesalinkInfoComponent,
    PesalinkHistoryComponent,
    RetryComponentComponent,
    DashboardComponent
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
    MatProgressBarModule
  ]
})
export class ProcessingModule { }
