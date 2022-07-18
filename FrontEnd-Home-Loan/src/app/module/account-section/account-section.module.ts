import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerFormComponent } from './ledger-form/ledger-form.component';
import { LedgerFormListComponent } from './ledger-form-list/ledger-form-list.component';
import { LoanApprovedListComponent } from './loan-approved-list/loan-approved-list.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';



@NgModule({
  declarations: [LedgerFormComponent, LedgerFormListComponent, LoanApprovedListComponent, LoanDisburseComponent],
  imports: [
    CommonModule
  ]
})
export class AccountSectionModule { }
