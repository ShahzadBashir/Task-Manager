import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {
  private ApiUrl="http://localhost:5000/tasks/addtask";
  constructor(private http:HttpClient) { }

  AddTask(data:any){
    return this.http.post(this.ApiUrl,data);
  }
}
