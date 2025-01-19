import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EntityService } from '../entity.service';

@Component({
  selector: 'app-get-entities',
  templateUrl: './get-entities.component.html',
  styleUrl: './get-entities.component.sass'
})
export class GetEntitiesComponent implements OnInit {

    displayedColumns: string[] = [
      'id',
      'name',
      'phone',
      'email',
      'location',
      'type'
    ];
  
  
    subscription!: Subscription;
    data: any;
    
      constructor(private router: Router, private dialog: MatDialog, private service: EntityService) { }
    
      @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
      @ViewChild(MatSort, { static: true }) sort: MatSort;
      @ViewChild("filter", { static: true }) filter: ElementRef;
      @ViewChild(MatMenuTrigger)
      contextMenu: MatMenuTrigger;
      contextMenuPosition = { x: "0px", y: "0px" };
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
  
    getEntitities() {
      this.subscription = this.service.getEntities().subscribe(res => {
        this.data = res;
        // Binding with the datasource
        this.dataSource = new MatTableDataSource(this.data.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }
  

    dataSource!: MatTableDataSource<any>;
    isLoading: boolean = true;

  ngOnInit():void{
    this.getEntitities()
  }

  addEntity(){
    this.router.navigate(['admin/entities/add'])
  }
}
