import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable()
export class CustomersService {

  pets: Pet[] = [
    {
      id: 1,
      birth: new Date(2016, 5, 22),
      breed: 'breed 1',
      color: 'red',
      contacts: 'contacts 1',
      currentDiagnosis: 'dio 1',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Master 1',
      name: 'pet 1',
      photo: '../../assets/staff/employee1.png',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'cat',
      weight: 20
    },
    {
      id: 2,
      birth: new Date(2016, 5, 22),
      breed: 'breed 2',
      color: 'black',
      contacts: 'contacts 2',
      currentDiagnosis: 'dio 2',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Master 2',
      name: 'pet 2',
      photo: '../../assets/staff/employee1.png',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'cat',
      weight: 25
    },
    {
      id: 3,
      birth: new Date(2016, 5, 22),
      breed: 'breed 3',
      color: 'brown',
      contacts: 'contacts 3',
      currentDiagnosis: 'dio 3',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Master 3',
      name: 'pet 3',
      photo: '../../assets/staff/employee1.png',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'dog',
      weight: 15
    },
    {
      id: 4,
      birth: new Date(2016, 5, 22),
      breed: 'breed 1',
      color: 'red',
      contacts: 'contacts 1',
      currentDiagnosis: 'dio 1',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Master 1',
      name: 'pet 1',
      photo: '../../assets/staff/employee1.png',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'cat',
      weight: 20
    },
    {
      id: 5,
      birth: new Date(2016, 5, 22),
      breed: 'breed 1',
      color: 'red',
      contacts: 'contacts 1',
      currentDiagnosis: 'dio 1',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Master 1',
      name: 'pet 1',
      photo: '../../assets/staff/employee1.png',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'cat',
      weight: 20
    },
    {
      id: 6,
      birth: new Date(2016, 5, 22),
      breed: 'breed 1',
      color: 'red',
      contacts: 'contacts 1',
      currentDiagnosis: 'dio 1',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Master 1',
      name: 'pet 1',
      photo: '../../assets/staff/employee1.png',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'cat',
      weight: 20
    }];

  constructor() { }


  getPet(id: number): Pet { 
    let item = this.pets.find(a => a.id == id);
    return item;
  }
}
