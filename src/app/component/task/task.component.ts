import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = new Observable<Task[]>();
  constructor(private dataServe: DataService) { }

  ngOnInit(): void {
    this.tasks = this.dataServe.fetchData();
  }

  public onTaskChange(task: Task): void {
    task.completed = !task.completed;
  }

}
