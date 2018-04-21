import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CustomersComponent } from './customers/customers.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CustomersService } from './services/customers.service';
import { ScheduleService } from './services/schedule.service';
import { StockService } from './services/stock.service';
import { StaffService } from './services/staff.service';
import { AppRoutingModule } from './app.routing';

// const appRoutes: Routes = [
//   { path: 'staff', component: StaffComponent },
//   { path: 'stock', component: StockComponent },
//   { path: 'schedule', component: ScheduleComponent },
//   { path: 'customers', component: CustomersComponent },
//   { path: '', redirectTo: 'staff', pathMatch: 'full' }
//   // { path: '**', component: StaffComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StockComponent,
    ScheduleComponent,
    CustomersComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
  ],
   exports: [AppRoutingModule],
  providers: [
    CustomersService,
    StaffService,
    StockService,
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
