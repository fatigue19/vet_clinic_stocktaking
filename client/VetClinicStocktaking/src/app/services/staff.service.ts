import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable()
export class StaffService {
  staff: Employee[] = [
    {
      id: 1,
      name: 'Employee1',
      position: 'position1',
      photo: '../../assets/staff/employee1.png',
      characteristics: 'test test test'
    },
    {
      id: 2,
      name: 'Employee2',
      position: 'position2',
      photo: '../../assets/staff/employee2.jpg',
      characteristics: 'test test test'
    },
    {
      id: 3,
      name: 'Employee3',
      position: 'position3',
      photo: '../../assets/staff/employee3.jpg',
      characteristics: 'test test test'
    },
    {
      id: 4,
      name: 'Employee4',
      position: 'position4',
      photo: '../../assets/staff/employee4.jpg',
      characteristics: 'test test test'
    },
    {
      id: 5,
      name: 'Employee5',
      position: 'position5',
      photo: '../../assets/staff/employee5.jpg',
      characteristics: 'test test test'
    },
    {
      id: 6,
      name: 'Employee6',
      position: 'position6',
      photo: '../../assets/staff/employee6.jpg',
      characteristics: 'test test test'
    }
  ];

  constructor() {}
}
