import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEntitiesComponent } from './get-entities/get-entities.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { AddEntityComponent } from './add-entity/add-entity.component';

const routes: Routes = [
  {
    path:"",
    canActivate: [AuthGuard],
    component: GetEntitiesComponent,
  },
  {
    path:"add",
    canActivate: [AuthGuard],
    component: AddEntityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
