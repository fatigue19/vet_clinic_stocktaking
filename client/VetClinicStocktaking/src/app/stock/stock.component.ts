import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { MatSnackBar } from '@angular/material';
import { Good } from '../models/good';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  public purchasedCount = 1;
  constructor(public stock: StockService, public modalSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  purchase(item: Good) {
    this.modalSnackBar.open(`You purchased ${this.purchasedCount} of ${item.name} by price of ${item.price}.`,
      '',
      { duration: 2000 });
    this.purchasedCount = 1;
  }
}
