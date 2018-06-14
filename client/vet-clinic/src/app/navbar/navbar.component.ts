import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare interface RouteInfo {
  label: string;
  path: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { label: 'Склад', path: 'stock', icon: 'dns' },
  { label: 'Клієнти', path: 'customers', icon: 'person' },
  { label: 'Робітники', path: 'staff', icon: 'accessibility' },
  { label: 'Розклад', path: 'schedule', icon: 'date_range' },
  { label: 'Записати', path: 'enroll', icon: 'done_all' }
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: any;
  menuItems: RouteInfo[] = ROUTES;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.items = ROUTES;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
