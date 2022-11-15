import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/dummyTasks';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }

  public onDelete(task: any) {
    console.log(task);
    console.log('Deleting this Task');
    this.taskService
      .deleteTask(task.id)
      .subscribe(
        (taska: Task) =>
          (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  public handleToggle(task: Task) {
    console.log('Handling Toggle');
    this.taskService.updateTask(task).subscribe();
  }
}
