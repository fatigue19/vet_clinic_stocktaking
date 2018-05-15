import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CustomersComponent } from './customers/customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

import { CustomersService } from './services/customers.service';
import { ScheduleService } from './services/schedule.service';
import { StockService } from './services/stock.service';
import { StaffService } from './services/staff.service';
import { AppRoutingModule } from './app.routing';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StockComponent,
    ScheduleComponent,
    CustomersComponent,
    NavbarComponent,
    PetEditComponent,
    EditStockComponent,
    EnrollComponent,
    EditStaffComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    CalendarModule.forRoot()
  ],
  exports: [AppRoutingModule],
  providers: [CustomersService, StaffService, StockService, ScheduleService],
  bootstrap: [AppComponent],
  entryComponents: [PetEditComponent]
})
export class AppModule { }
