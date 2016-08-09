import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <div class="col-sm-4">
      <select class="col-sm-4 form-control input-lg" #newPriority>
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div class="col-sm-4">
      <select class="col-sm-4 form-control input-lg" #newCategory>
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
        <option value="home">Home</option>
      </select>
    </div>
    <br>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]> ;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement, userCategory: HTMLSelectElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value, userCategory.value]);
    userDescription.value = "";
  }
}
