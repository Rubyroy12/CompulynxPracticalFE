import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "process",
    loadChildren: () =>
      import("./processing/processing.module").then(
        (m) => m.ProcessingModule
      ),
  },
  {
    path: "user",
    loadChildren: () =>
      import("../admin/users/users.module").then(
        (m) => m.UsersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiatorRoutingModule { }
