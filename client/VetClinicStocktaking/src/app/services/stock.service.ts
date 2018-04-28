import { Injectable } from '@angular/core';
import { Good } from '../models/good';

@Injectable()
export class StockService {
  stockItems: Good[] = [
    { id: 1, name: 'item 1', description: 'description', price: 100, count: 5, image: '../../assets/staff/employee1.png' },
    { id: 2, name: 'item 2', description: 'description', price: 150, count: 2, image: '../../assets/staff/employee1.png' },
    { id: 3, name: 'item 3', description: 'description', price: 160, count: 4, image: '../../assets/staff/employee1.png' },
    { id: 4, name: 'item 4', description: 'description', price: 20, count: 6, image: '../../assets/staff/employee1.png' },
    { id: 5, name: 'item 5', description: 'description', price: 200, count: 3, image: '../../assets/staff/employee1.png' },
    { id: 6, name: 'item 6', description: 'description', price: 300, count: 1, image: '../../assets/staff/employee1.png' },
  ];

  constructor() {}

  getAvailableItems() {
    return this.stockItems;
  }
}
