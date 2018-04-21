import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  menuItems: RouteInfo[] = ROUTES;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
