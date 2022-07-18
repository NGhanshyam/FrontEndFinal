import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionListGeneratorComponent } from './sanction-list-generator/sanction-list-generator.component';
import { SanctionListComponent } from './sanction-list/sanction-list.component';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { EmailSendingComponent } from './email-sending/email-sending.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';



@NgModule({
  declarations: [SanctionListGeneratorComponent, SanctionListComponent,CreditmanagerComponent, EmailSendingComponent, EmiCalculatorComponent],
  imports: [
    CommonModule
  ]
})
export class CreditManagerModule { }
