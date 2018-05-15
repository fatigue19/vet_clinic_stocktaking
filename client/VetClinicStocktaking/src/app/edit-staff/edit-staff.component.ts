import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private staffService: StaffService) { }

  ngOnInit() {
    const ident = this.route.snapshot.paramMap.get('id');

    if (ident != null) {
      const id: number = ident ? +ident : 0;
      this.employee = this.staffService.getEmployee(id);
    } else {
      this.employee = new Employee();
    }
  }

  save() {
    const item = this.staffService.staff.find(a => a.id === this.employee.id);

    if (item) {
      const index = this.staffService.staff.indexOf(item);

      this.staffService.staff[index] = this.employee;
    } else {
      this.staffService.staff.push(this.employee);
    }
    this.router.navigate(['staff']);
  }

  cancel() {
this.router.navigate(['staff']);
  }
}
