import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http:HttpClient) { }
  private ApiUrl="http://localhost:5000";
  Signup(user:any){
    return this.http.post(this.ApiUrl+'/Account/Signup',user);
  }
  Login(user:any){
    return this.http.post(this.ApiUrl+'/Auth',user);
  }
}
