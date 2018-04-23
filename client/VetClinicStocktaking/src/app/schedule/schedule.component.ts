import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor(public schedule: ScheduleService) {}

  cols: any[];
  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Date' },
      { field: 'customer', header: 'Customer' },
      { field: 'employee', header: 'Employee' }
    ];
  }
}
