import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupClass } from 'src/app/class/signup-class';
import { LoginComponent } from '../login/login.component';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupuser : SignupClass = new SignupClass();

  constructor() { }
  // private signupservice: SignupServiceService, private router: Router

  ngOnInit(): void {
  }

  // saveUser(){
  //   this.signupservice.newsignupuser(this.signupuser).subscribe(data=>{
  //     this.gotoEmployeeList();
  //   },
  //   error=>console.log(error));
  // }

  // gotoEmployeeList(){
  //   this.router.navigate(['/home']);
  // }

  // onSubmit(){
  //   console.log(this.signupuser);
  //   this.saveUser();
  // }

}
