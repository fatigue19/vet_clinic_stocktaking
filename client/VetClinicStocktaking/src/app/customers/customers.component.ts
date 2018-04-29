import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PetEditComponent } from '../pet-edit/pet-edit.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor(public customers: CustomersService, public dialog: MatDialog) { }

  displayedColumns = ['name', 'masterName', 'type', 'breed', 'sex', 'color', 'registration', 'action'];
  dataSource = new MatTableDataSource(this.customers.pets);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(PetEditComponent, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  edit(element: any) {
   this.dialog.open(PetEditComponent, {
      width: '500px',
      data: element
    });
  }

  remove(element: any) {
    // remove element
  }
}
