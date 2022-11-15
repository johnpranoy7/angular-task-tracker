import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl: string = 'http://localhost:8000/tasks';

  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  public deleteTask(id:number): Observable<Task>{
    return this.httpClient.delete<Task>(`${this.apiUrl}/${id}`);
  }

  public updateTask(task:Task): Observable<Task>{
    var body:any = task;
    body.reminder = !body.reminder;
    return this.httpClient.put<Task>(`${this.apiUrl}/${task.id}`,body);
  }

}
