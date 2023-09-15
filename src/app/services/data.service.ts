import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public fetchData() {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
