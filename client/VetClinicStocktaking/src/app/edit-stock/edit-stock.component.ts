import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Good } from '../models/good';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  stockItem: Good;

  constructor(private route: ActivatedRoute, private router: Router, public stockService: StockService) { }

  ngOnInit() {
    let ident = this.route.snapshot.paramMap.get('id');

    if (ident != null) {
      let id: number = ident ? +ident : 0;
      this.stockItem = this.stockService.getGood(id);
     }
    else { 
      this.stockItem = new Good();
    }
  }

  
  save() {
    let item = this.stockService.stockItems.find(a => a.id === this.stockItem.id);

    if (item) {
      let index = this.stockService.stockItems.indexOf(item);

      this.stockService.stockItems[index] = this.stockItem;
    }
    else { 
      this.stockService.stockItems.push(this.stockItem);
    }

    this.router.navigate(['customers']);
  }

  cancel() {
    this.router.navigate(['customers']);
  }

}
