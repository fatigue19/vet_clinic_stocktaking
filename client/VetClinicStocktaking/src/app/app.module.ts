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

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DataListModule } from 'primeng/datalist';
import { ScheduleModule } from 'primeng/schedule';
import { DialogModule } from 'primeng/dialog';

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
    AppRoutingModule,
    BrowserModule,
    TabMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    TableModule,
    DataListModule,
    FormsModule,
    ScheduleModule,
    DialogModule
  ],
  exports: [AppRoutingModule],
  providers: [CustomersService, StaffService, StockService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
