import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormArrayName
} from '@angular/forms';
import { StaffService } from '../services/staff.service';
import { Employee } from '../models/employee';
import { Schedule } from '../models/schedule';
import { Time } from '@angular/common';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  doctorsList: Employee[];
  public enroll: Schedule;
  formGroup: FormGroup;
  formArray: FormArrayName;
  date: Date;
  timeString: string;

  constructor(private _formBuilder: FormBuilder, private staff: StaffService, private schedule: ScheduleService) {}

  ngOnInit() {
    this.doctorsList = this.staff.staff;

    this.enroll = new Schedule();
  }

  submit() {
    
    this.enroll.date.setHours(+this.timeString.split(':')[0]);
    this.enroll.date.setMinutes(+this.timeString.split(':')[1]);
    this.schedule.addSchedule(this.enroll);
  }
}
