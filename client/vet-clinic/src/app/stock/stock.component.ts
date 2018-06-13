import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { MatSnackBar } from '@angular/material';
import { Good } from '../models/good';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  public purchasedCount = 1;
  items: Good[] = [];

  constructor(
    public stock: StockService,
    public modalSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = this.stock.stockItems;
  }

  purchase(item: Good) {
    this.modalSnackBar.open(
      `You purchased ${this.purchasedCount} of ${item.name} by price of ${
      item.price
      }.`,
      '',
      { duration: 2000 }
    );
    item = this.stock.stockItems.find(a => a.id === item.id);
    console.log(item);
    item.count += this.purchasedCount;
    this.purchasedCount = 1;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.items = this.stock.stockItems.filter(
      a =>
        a.name.includes(filterValue) ||
        a.count.toString().includes(filterValue) ||
        a.description.includes(filterValue) ||
        a.price.toString().includes(filterValue)
    ); // = filterValue;
  }

  add() {
    this.router.navigate(['edit-stock']);
  }
  edit(id: number) {
    this.router.navigate(['edit-stock/' + id]);
  }

  remove(id: number) {
    this.stock.removeGood(id);
  }
}
