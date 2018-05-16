import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CustomersComponent } from './customers/customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'staff', pathMatch: 'full' },
  { path: 'staff', component: StaffComponent },
  { path: 'stock', component: StockComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'pet-edit', component: PetEditComponent },
  { path: 'pet-edit/:id', component: PetEditComponent },
  { path: 'edit-stock', component: EditStockComponent },
  { path: 'edit-stock/:id', component: EditStockComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'edit-staff', component: EditStaffComponent },
  { path: 'edit-staff/:id', component: EditStaffComponent },
  { path: '**', redirectTo: 'staff' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
