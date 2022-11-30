import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptedCandiComponent } from './accepted-candi/accepted-candi.component';
import { RejectedCandComponent } from './rejected-cand/rejected-cand.component';
import { UploadJobrolesComponent } from './upload-jobroles/upload-jobroles.component';



@NgModule({
  declarations: [
    AcceptedCandiComponent,
    RejectedCandComponent,
    UploadJobrolesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcceptedCandiComponent,
    RejectedCandComponent,
    UploadJobrolesComponent
  ]
})
export class AdminProcessModule { }
