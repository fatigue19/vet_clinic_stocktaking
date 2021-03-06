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
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

import { CustomersService } from './services/customers.service';
import { ScheduleService } from './services/schedule.service';
import { StockService } from './services/stock.service';
import { StaffService } from './services/staff.service';
import { AppRoutingModule } from './app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  MatCardModule,
  MatStepperModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

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
    EditStaffComponent,
    EditScheduleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [AppRoutingModule],
  providers: [CustomersService, StaffService, StockService, ScheduleService],
  bootstrap: [AppComponent],
  entryComponents: [PetEditComponent]
})
export class AppModule {}
