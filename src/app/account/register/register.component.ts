import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {AccountService} from '../../services/Account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  SignupForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    emailaddress:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  hide = true;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  get firstname(){
    return this.SignupForm.get('firstname');
  }
  get lastname(){
    return this.SignupForm.get('lastname');
  }
  get emailaddress(){
    return this.SignupForm.get('emailaddress');
  }
  get password(){
    return this.SignupForm.get('password');
  }

  Signup(){
    this.accountService.Signup(this.SignupForm.value).subscribe((success)=>{
      alert("Success");
      console.log(success);
      this.SignupForm.reset();
    },
    (err)=>{
      alert("Failed");
      console.log(err.error.message);
    });
  }
}
