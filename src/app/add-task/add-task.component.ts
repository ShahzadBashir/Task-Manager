import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTaskForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    description:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  
  get name(){
    return this.addTaskForm.get('name');
  }

  AddTask(){
    if(this.addTaskForm.valid){
    }    
  }
}
