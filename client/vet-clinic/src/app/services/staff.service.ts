import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable()
export class StaffService {
  staff: Employee[] = [
    {
      id: 1,
      name: 'Петров Сергій Анатолійович',
      position: 'Директор клініки',
      photo: '../../assets/staff/employee6.jpg',
      characteristics: 'Відповідальний, лідер, засновник клініки',
      isDoctor: false
    },
    {
      id: 2,
      name: 'Іванова Марія Павлівна',
      position: 'Головний бухгалтер',
      photo: '../../assets/staff/employee3.jpg',
      characteristics: 'Експерт по цифрам',
      isDoctor: false
    },
    {
      id: 3,
      name: 'Жук Іван Федорович',
      position: 'Ветеринар-фелінолог',
      photo: '../../assets/staff/employee2.jpg',
      characteristics: 'Спеціаліст з домашніх котів',
      isDoctor: true
    },
    {
      id: 4,
      name: 'Пупа Іван Григорович',
      position: 'Ветеринарний фельдшер',
      photo: '../../assets/staff/employee5.jpg',
      characteristics: 'Має середню освіту',
      isDoctor: true
    },
    {
      id: 5,
      name: 'Белкін Олександр Іванович',
      position: 'Адміністратор',
      photo: '../../assets/staff/employee4.jpg',
      characteristics: 'Веде записи в електронну систему',
      isDoctor: false
    },
    {
      id: 6,
      name: 'Коржов Андрій Андрійович',
      position: 'Завідувач складу',
      photo: '../../assets/staff/employee1.png',
      characteristics: 'Завідує складом, розвантажує машини з товарами',
      isDoctor: false
    }
  ];

  constructor() { }

  getEmployee(id: number): Employee {
    const item = this.staff.find(a => a.id === id);
    return item;
  }

  removeEmployee(id: number) {
    const item = this.staff.find(a => a.id === id);

    const index = this.staff.indexOf(item);

    this.staff.splice(index, 1);
  }
}
