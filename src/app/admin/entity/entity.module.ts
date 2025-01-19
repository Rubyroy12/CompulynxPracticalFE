import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { AddEntityComponent } from './add-entity/add-entity.component';
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
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GetEntitiesComponent } from './get-entities/get-entities.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddEntityComponent,
    GetEntitiesComponent

  ],
  imports: [
    CommonModule,
    EntityRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // MatTableExporterModule,
    SharedModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    ComponentsModule
  ]
})
export class EntityModule { }
AddEntityComponent