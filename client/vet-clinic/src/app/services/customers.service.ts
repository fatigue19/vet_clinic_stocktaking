import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable()
export class CustomersService {

  pets: Pet[] = [
    {
      id: 1,
      birth: new Date(2016, 5, 22),
      breed: 'Австралійська димчата',
      color: 'Сірий смугастий',
      contacts: '(044) 256-45-62',
      currentDiagnosis: 'Не привитий',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Коржов Андрій Григорович',
      name: 'Смокі',
      photo: '../../assets/customers/Australian_Mist.jpg',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'Кіт',
      weight: 5
    },
    {
      id: 2,
      birth: new Date(2016, 5, 22),
      breed: 'Вівчарка німецька',
      color: 'Коричневий з чорними плямами',
      contacts: '(044) 542-34-63',
      currentDiagnosis: 'Вивихнута лапа',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Іванова Анастасія Степанівна',
      name: 'Рекс',
      photo: '../../assets/customers/800px-Deutscher_Schäferhund-_portrait.JPG',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'Собака',
      weight: 37
    },
    {
      id: 3,
      birth: new Date(2016, 5, 22),
      breed: 'Американський керл',
      color: 'Коричневий',
      contacts: '(044) 543-35-42',
      currentDiagnosis: 'Відсутній',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Петров Василь Іванович',
      name: 'Кек',
      photo: '../../assets/customers/American_curl_2.jpg',
      registration: new Date(2017, 6, 30),
      sex: 'female',
      type: 'Кіт',
      weight: 6
    },
    {
      id: 4,
      birth: new Date(2016, 5, 22),
      breed: 'Британська короткошерста',
      color: 'Сірий',
      contacts: '(044) 545-25-25',
      currentDiagnosis: 'Лишай',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Сидоров Петро Іванович',
      name: 'Гаррі',
      photo: '../../assets/customers/800px-Britishblue.jpg',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'Кіт',
      weight: 6
    },
    {
      id: 5,
      birth: new Date(2016, 5, 22),
      breed: 'Персидська',
      color: 'Рудий',
      contacts: '(044) 256-35-67',
      currentDiagnosis: 'Потрібне щеплення',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Полякова Анна Григорівна',
      name: 'Рижик',
      photo: '../../assets/customers/Persialainen.jpg',
      registration: new Date(2017, 6, 30),
      sex: 'male',
      type: 'Кіт',
      weight: 5
    },
    {
      id: 6,
      birth: new Date(2016, 5, 22),
      breed: 'Чихуахуа',
      color: 'Світло коричневий',
      contacts: '(044) 228-88-42',
      currentDiagnosis: 'Лишай',
      fitstRecording: new Date(2017, 6, 30),
      lastRecording: new Date(2018, 4, 27),
      masterName: 'Григоров Віталій Віталійович',
      name: 'Поця',
      photo: '../../assets/customers/80-p.jpg',
      registration: new Date(2017, 6, 30),
      sex: 'female',
      type: 'Кіт',
      weight: 5
    }];

  constructor() { }


  getPet(id: number): Pet {
    const item = this.pets.find(a => a.id === id);
    return item;
  }

  removePet(id: number) {
    const item = this.pets.find(a => a.id === id);

    const index = this.pets.indexOf(item);

    this.pets.splice(index, 1);
  }
}
