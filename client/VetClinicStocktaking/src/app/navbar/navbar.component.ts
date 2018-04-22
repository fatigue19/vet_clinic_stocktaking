import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

declare interface RouteInfo {
  title: string;
  path: string;
}

export const ROUTES: RouteInfo[] = [
  { title: 'Stock', path: 'stock' },
  { title: 'Customers', path: 'customers' },
  { title: 'Staff', path: 'staff' },
  { title: 'Schedule', path: 'schedule' }];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  menuItems: RouteInfo[] = ROUTES;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.items = [
      { label: 'Stock', icon: 'fa-bar-chart', routerLink: ['/stock'] },
      { label: 'Customers', icon: 'fa-calendar', routerLink: ['/customers'] },
      { label: 'Staff', icon: 'fa-book', routerLink: ['/staff'] },
      { label: 'Schedule', icon: 'fa-support', routerLink: ['/schedule'] },
      { label: 'Social', icon: 'fa-twitter' }
    ];
  }


}
