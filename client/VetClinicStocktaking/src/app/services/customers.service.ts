import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomersService {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Customer1',
      pet: {
        id: 1,
        name: 'pet1',
        history: [{ id: 1, date: new Date('28-06-17'), result: 'result1' }]
      }
    }
  ];

  constructor() {}
}
