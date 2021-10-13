import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

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
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    description:new FormControl('')
  })
  hide = true;
  constructor() { }

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

  Signup(){}
}
