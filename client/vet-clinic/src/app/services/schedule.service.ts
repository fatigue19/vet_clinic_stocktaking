import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';

@Injectable()
export class ScheduleService {
  schedules: Schedule[] = [
    {
      id: 1,
      date: new Date(2018, 3, 26, 10, 0),
      customer: 'Петров Василь Іванович',
      employee: 'Жук Іван Федорович',
      comment: 'Медогляд'
    },
    {
      id: 2,
      date: new Date(2018, 3, 26, 9, 0),
      customer: 'Сидоров Петро Іванович',
      employee: 'Жук Іван Федорович',
      comment: 'Температура'
    },
    {
      id: 3,
      date: new Date(2018, 3, 26, 11, 0),
      customer: 'Іванова Анастасія Степанівна',
      employee: 'Пупа Іван Григорович',
      comment: 'Щеплення'
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
