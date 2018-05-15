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
  { title: 'Schedule', path: 'schedule' },
  { title: 'Enroll', path: 'enroll' }
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
    this.items = [
      { label: 'Stock', icon: 'dns', path: '/stock' },
      { label: 'Customers', icon: 'person', path: '/customers' },
      { label: 'Staff', icon: 'accessibility', path: '/staff' },
      { label: 'Schedule', icon: 'date_range', path: '/schedule' },
      { label: 'Enroll', icon: 'date_range', path: '/enroll' }
    ];
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
