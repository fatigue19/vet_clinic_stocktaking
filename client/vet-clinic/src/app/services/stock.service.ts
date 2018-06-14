import { Injectable } from '@angular/core';
import { Good } from '../models/good';

@Injectable()
export class StockService {
  stockItems: Good[] = [
    {
      id: 1,
      name: 'ПимоПет',
      description:
        'Препарат для лікування серцевої недостатності у собак (30 таблеток)',
      price: 357.84,
      count: 5,
      image: '../../assets/stock/PimpPet.png'
    },
    {
      id: 2,
      name: 'Имаверол',
      description: 'Протигрибковий засіб (100 мл)',
      price: 878,
      count: 2,
      image: '../../assets/stock/Imaverol.jpg'
    },
    {
      id: 3,
      name: 'Дезі Срей',
      description: 'Засіб антибактеріальний (100 мл)',
      price: 53.86,
      count: 4,
      image: '../../assets/stock/dezi spray.jpg'
    },
    {
      id: 4,
      name: 'Метронидазол',
      description: 'Антибіотик широкого спектра (250 мг, табл.)',
      price: 80,
      count: 6,
      image: '../../assets/stock/Metronizadol.jpg'
    },
    {
      id: 5,
      name: 'Олиговіт',
      description: 'Вітаміни для тварин, птахів, імоностимулятори (100 мл)',
      price: 135,
      count: 3,
      image: '../../assets/stock/Oligovit.jpg'
    },
    {
      id: 6,
      name: 'Линкомистин',
      description: 'Антисептик на спиртовій основі (115 мл)',
      price: 74.4,
      count: 1,
      image: '../../assets/stock/Imaverol.jpg'
    },
    {
      id: 7,
      name: 'Тромексин',
      description: 'Комплексний антибактеріальний препарат (1 г)',
      price: 4,
      count: 3,
      image: '../../assets/stock/Tromexin.jpg'
    },
    {
      id: 8,
      name: 'Присипка',
      description: 'Присипка для ран (50 гр)',
      price: 32,
      count: 6,
      image: '../../assets/stock/prisipka.png'
    },
    {
      id: 9,
      name: 'Ветбіциллін',
      description: 'Активний щодо грампозитивних мікроорганізмів',
      price: 306,
      count: 10,
      image: '../../assets/stock/ebizilin.jpg'
    },
    {
      id: 10,
      name: 'Седазін',
      description: 'Заспокійливе (50 мл)',
      price: 212,
      count: 5,
      image: '../../assets/stock/sedazin.jpg'
    },
    {
      id: 11,
      name: 'Клависептин',
      description: 'Антибіотик (200 мг)',
      price: 230,
      count: 2,
      image: '../../assets/stock/klavi.jpg'
    }
  ];

  constructor() {}

  getAvailableItems() {
    return this.stockItems;
  }

  getGood(id: number): Good {
    const item = this.stockItems.find(a => a.id === id);
    console.log(item);
    return item;
  }

  removeGood(id: number) {
    const item = this.stockItems.find(a => a.id === id);

    const index = this.stockItems.indexOf(item);
    this.stockItems.splice(index, 1);
  }
}
