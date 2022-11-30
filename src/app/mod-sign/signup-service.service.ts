import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { SignupClass } from '../class/signup-class';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  private URL="http://localhost:8086/home";
  constructor(private httpClient: HttpClient) { }

  newsignupuser(signupuser:SignupClass):Observable<object>{
    return this.httpClient.post(`${this.URL}`,signupuser);
  }
}
