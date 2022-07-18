import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerenquiryComponent } from './customerenquiry/customerenquiry.component';
import { EmailsendingComponent } from './emailsending/emailsending.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';
import { ApplicantregistrationComponent } from './applicantregistration/applicantregistration.component';



@NgModule({
  declarations: [CustomerenquiryComponent, EmailsendingComponent, CustomerregistrationComponent, DocumentuploadComponent, ApplicantregistrationComponent],
  imports: [
    CommonModule
  ]
})
export class SalesExecutiveModule { }
