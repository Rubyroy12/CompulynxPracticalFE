import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

  {
    path: "roles",
    loadChildren: () =>
      import("./roles/roles.module").then(
        (m) => m.RolesModule
      ),
  },
  
  {
    path: "students",
    loadChildren: () =>
      import("./students/student.module").then(
        (m) => m.UsersModule
      ),
  },

 
  {
    path: "entities",
    loadChildren: () =>
        import("./entity/entity.module").then(
        (m) => m.EntityModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }
