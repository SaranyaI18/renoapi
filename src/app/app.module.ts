import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { ModMainModule } from './mod-main/mod-main.module';

import { ModDirModule } from './mod-dir/mod-dir.module';
import { ModSignModule } from './mod-sign/mod-sign.module';
import { SignupServiceService } from './mod-sign/signup-service.service';
import { UserresumeupdateServiceService } from './mod-main/userresumeupdate-service.service';
import { AdminProcessModule } from './admin-process/admin-process.module';
import { HomeServiceService } from './mod-main/home-service.service';



@NgModule({
  declarations: [
    AppComponent,
   
    
 
  ],
  imports: [
    BrowserModule,
    ModMainModule,
    AppRoutingModule,
    ModDirModule,
    ModSignModule,
    AdminProcessModule
    
  ],
  providers: [SignupServiceService,
  UserresumeupdateServiceService,
HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
