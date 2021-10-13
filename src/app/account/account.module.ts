import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterComponent
  ]
})
export class AccountModule { }
