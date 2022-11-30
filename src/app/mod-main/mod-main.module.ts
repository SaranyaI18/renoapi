import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserresumeupdateComponent } from './userresumeupdate/userresumeupdate.component';
import { AdminComponent } from './admin/admin.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { JoblistComponent } from './joblist/joblist.component';
import { FormsModule } from '@angular/forms';
import { AutofillManualComponent } from './autofill-manual/autofill-manual.component';
import { MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [
    HomeComponent,
    UserresumeupdateComponent,
    AdminComponent,
    UserstatusComponent,
    JoblistComponent,
    AutofillManualComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    
  ],
  exports: [
    HomeComponent,
    UserresumeupdateComponent,
    AdminComponent,
    UserstatusComponent,
    JoblistComponent,
    AutofillManualComponent,
  ]
})
export class ModMainModule { }
