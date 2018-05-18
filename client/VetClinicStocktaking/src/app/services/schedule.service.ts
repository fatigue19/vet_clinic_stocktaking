import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';

@Injectable()
export class ScheduleService {
  schedules: Schedule[] = [
    {
      id: 1,
      date: new Date(2018, 3, 26, 10, 0),
      customer: 'Customer1',
      employee: 'Employee1',
      comment: 'ache'
    },
    {
      id: 2,
      date: new Date(2018, 3, 26, 9, 0),
      customer: 'Customer2',
      employee: 'Employee1',
      comment: 'temprature'
    },
    {
      id: 3,
      date: new Date(2018, 3, 26, 11, 0),
      customer: 'Customer3',
      employee: 'Employee2',
      comment: 'inspectation'
    }
  ];
  constructor() {}

  getSchedule(id: number): Schedule {
    const item = this.schedules.find(a => a.id === id);
    return item;
  }

  removeSchedule(id: number) {
    const item = this.schedules.find(a => a.id === id);

    const index = this.schedules.indexOf(item);

    this.schedules.splice(index, 1);
  }

  addSchedule(sch: Schedule) {
    const id = this.schedules.length + 1;
    sch.id = id;
    this.schedules.push(sch);
    console.log(this.schedules);
  }
}
