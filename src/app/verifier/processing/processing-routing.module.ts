import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { ProcessingHistoryComponent } from './processing-history/processing-history.component';
import { PendingQueueComponent } from './pending-queue/pending-queue.component';
import { PesalinkHistoryComponent } from './pesalink-history/pesalink-history.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: "pending",
    canActivate: [AuthGuard],
    component: PendingQueueComponent,
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
