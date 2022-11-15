import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task?:Task;
  @Output() deleteEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleEvent: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTrigger(task:any){
    this.deleteEvent.emit(task);
  }

  toggleReminder(task:any){
    this.toggleEvent.emit(task);
  }

}
