import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [CibilscoreComponent, ViewCustomerComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class OperationalExecutiveModule { }
