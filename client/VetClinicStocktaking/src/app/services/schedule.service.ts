import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';

@Injectable()
export class ScheduleService {
  schedules: Schedule[] = [
    {
      id: 1,
      date: new Date('25-03-18 17:00'),
      customer: 'Customer1',
      employee: 'Employee1'
    },
    {
      id: 2,
      date: new Date('26-03-18 9:00'),
      customer: 'Customer2',
      employee: 'Employee1'
    },
    {
      id: 3,
      date: new Date('26-03-18 11:00'),
      customer: 'Customer3',
      employee: 'Employee2'
    }
  ];
  constructor() {}
}
