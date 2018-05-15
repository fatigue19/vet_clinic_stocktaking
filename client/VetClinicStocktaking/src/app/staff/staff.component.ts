import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  items: Employee[] = [];

  constructor(public staff: StaffService,
    public modalSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.items = this.staff.staff;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.items = this.staff.staff.filter(
      a =>
        a.name.includes(filterValue) ||
        a.position.toString().includes(filterValue) ||
        a.characteristics.includes(filterValue)
    );
  }
  add() {
    this.router.navigate(['edit-staff']);
  }
  edit(id: number) {
    this.router.navigate(['edit-staff/' + id]);
  }

  remove(id: number) {
    this.staff.removeEmployee(id);
  }
}
