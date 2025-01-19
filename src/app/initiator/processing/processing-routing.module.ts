import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkProcessingComponent } from './bulk-processing/bulk-processing.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { TemplateAndInstructionsComponent } from './template-and-instructions/template-and-instructions.component';
import { ProcessingHistoryComponent } from './processing-history/processing-history.component';
import { PesalinkHistoryComponent } from './pesalink-history/pesalink-history.component';
import { DashboardComponent } from 'src/app/verifier/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: "template",
    canActivate: [AuthGuard],
    component: TemplateAndInstructionsComponent,
  },
  {
    path: "bulk",
    canActivate: [AuthGuard],
    component: BulkProcessingComponent,
  },
  {
    path: "history",
    canActivate: [AuthGuard],
    component: ProcessingHistoryComponent,
  },
  {
    path: "pesalink",
    canActivate: [AuthGuard],
    component: PesalinkHistoryComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessingRoutingModule { }
