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
      { label: 'Stock', icon: 'fa-archive', routerLink: ['/stock'] },
      { label: 'Customers', icon: 'fa-address-book', routerLink: ['/customers'] },
      { label: 'Staff', icon: 'fa-user-md', routerLink: ['/staff'] },
      { label: 'Schedule', icon: 'fa-calendar', routerLink: ['/schedule'] },
      { label: 'Social', icon: 'fa-twitter' }
    ];
  }


}
