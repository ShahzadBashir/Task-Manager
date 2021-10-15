import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  private ApiUrl="http://localhost:5000/Account/Signup";
  Signup(user:any){
    return this.http.post(this.ApiUrl,user);
  }
}
