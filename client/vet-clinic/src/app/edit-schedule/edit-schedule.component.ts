import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../models/schedule';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {
  constructor(
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  schedule: Schedule;
  ngOnInit() {
    const ident = this.route.snapshot.paramMap.get('id');

    if (ident != null) {
      const id = ident ? +ident : 0;
      this.schedule = this.scheduleService.getSchedule(id);
    } else {
      this.schedule = new Schedule();
    }
  }

  save() {
    const item = this.scheduleService.schedules.find(
      a => a.id === this.schedule.id
    );

    if (item) {
      const index = this.scheduleService.schedules.indexOf(item);

      this.scheduleService.schedules[index] = this.schedule;
    } else {
      this.scheduleService.schedules.push(this.schedule);
    }
    this.router.navigate(['schedule']);
  }

  cancel() {
    this.router.navigate(['schedule']);
  }
}
