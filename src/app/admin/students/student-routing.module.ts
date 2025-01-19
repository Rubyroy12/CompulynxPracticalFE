import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { UploadedusersComponent } from './uploadedusers/uploadedusers.component';
import { studentsAccountsComponent } from './studentsAccounts/studentsAccounts.component';

const routes: Routes = [
  {
    path: "",
    component: studentsAccountsComponent,
  },
  {
    path: "bulkusers",
    component: UploadedusersComponent,
  },
 
  {
    path: "settings",
    component: SettingsComponent,
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
