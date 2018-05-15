import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PetEditComponent } from '../pet-edit/pet-edit.component';
import { Pet } from '../models/pet';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor(
    public customers: CustomersService,
    public dialog: MatDialog,
    public http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  displayedColumns = [
    'name',
    'masterName',
    'type',
    'breed',
    'sex',
    'color',
    'registration',
    'action'
  ];
  dataSource = new MatTableDataSource(this.customers.pets);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  edit(element: Pet) {
    this.router.navigate(['pet-edit/' + element.id]);
  }

  add() {
    this.router.navigate(['pet-edit']);
  }

  remove(element: Pet) {
    this.customers.removePet(element.id);
  }
}
