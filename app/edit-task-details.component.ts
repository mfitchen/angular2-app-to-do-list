import { Component } from 'angular2/core';
import { Task } from './task.model'

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="task-form">
      <h3>Edit Description:</h3>
      <input [(ngModel)]="task.description" class="col-sm-8 input-lg"/>
      <div class="col-sm-2">
        <select [(ngModel)]="task.priority" class="form-control input-lg">
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div class="col-sm-2">
        <select [(ngModel)]="task.category" class="form-control input-lg">
          <option value="work">Work</option>
          <option value="hobby">Hobby</option>
          <option value="home">Home</option>
        </select>
      </div>
    </div>
    <br>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
  `
})

export class EditTaskDetailsComponent {
  public task: Task;
}
