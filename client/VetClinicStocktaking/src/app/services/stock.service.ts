import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable()
export class StockService {
  stockItems: Stock[] = [
    { id: 1, name: 'item 1', count: 5 },
    { id: 2, name: 'item 1', count: 3 },
    { id: 3, name: 'item 1', count: 1 },
    { id: 4, name: 'item 1', count: 7 },
    { id: 5, name: 'item 1', count: 2 },
    { id: 6, name: 'item 1', count: 2 },
    { id: 7, name: 'item 1', count: 9 },
    { id: 8, name: 'item 1', count: 4 },
    { id: 9, name: 'item 1', count: 5 },
    { id: 10, name: 'item 1', count: 1 },
    { id: 11, name: 'item 1', count: 3 }
  ];

  constructor() {}

  getAvailableItems() {
    return this.stockItems;
  }
}
