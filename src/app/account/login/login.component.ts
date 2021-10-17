import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AccountService} from '../../services/Account/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm=new FormGroup({
    emailaddress:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  hide = true;
  constructor(private accountService:AccountService) { }

  get emailaddress(){
    return this.LoginForm.get('emailaddress');
  }
  get password(){
    return this.LoginForm.get('password');
  }

  Login(){
    this.accountService.Login(this.LoginForm.value).subscribe((success)=>{
      alert("Success");
      console.log(success);
      this.LoginForm.reset();
    },
    (err)=>{
      alert("Failed");
      console.log(err.error.message);
    });
  }
  ngOnInit(): void {
  }

}
