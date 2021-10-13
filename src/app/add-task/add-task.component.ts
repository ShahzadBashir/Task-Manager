import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import {TaskServicesService} from '../services/Task/task-services.service'
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
  constructor(private addTaskService:TaskServicesService) { }

  ngOnInit(): void {
  }
  
  get name(){
    return this.addTaskForm.get('name');
  }

  AddTask(){
    if(this.addTaskForm.valid){
      this.addTaskService.AddTask(this.addTaskForm.value).subscribe((result)=>{
        console.log(result);
      });
    }    
  }
}
