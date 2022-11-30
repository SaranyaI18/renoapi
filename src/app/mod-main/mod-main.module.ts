import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserresumeupdateComponent } from './userresumeupdate/userresumeupdate.component';
import { AdminComponent } from './admin/admin.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { JoblistComponent } from './joblist/joblist.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    UserresumeupdateComponent,
    AdminComponent,
    UserstatusComponent,
    JoblistComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    UserresumeupdateComponent,
    AdminComponent,
    UserstatusComponent,
   
  ]
})
export class ModMainModule { }
