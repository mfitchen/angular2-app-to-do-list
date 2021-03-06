import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe'
import { PriorityPipe } from './priority.pipe'
import { CategoryPipe } from './category.pipe'

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, PriorityPipe, CategoryPipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter" class="col-sm-3 form-control input-lg">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <select (change)="onPriorityChange($event.target.value)" class="filter" class="col-sm-3 form-control input-lg">
    <option value="high">Show High Priority Tasks</option>
    <option value="normal">Show Normal Prioroty Tasks</option>
    <option value="low">Show Low Priority Tasks</option>
    <option value="all" selected="selected">Show All Tasks (Priority)</option>
  </select>
  <select (change)="onCategoryChange($event.target.value)" class="filter" class="col-sm-3 form-control input-lg">
    <option value="work">Show Work Tasks</option>
    <option value="hobby">Show Hobby Tasks</option>
    <option value="home">Show Home Tasks</option>
    <option value="all" selected="selected">Show All Tasks (Category)</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone | priority:filterPriority | category:filterCategory"
      (click)="taskClicked(currentTask)"
      [class.selected]="currentTask === selectedTask"
      [task]="currentTask">
  </task-display>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details>
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})

export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  public filterPriority: string = "all";
  public filterCategory: string = "all";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log("Child", clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(arg: string[]): void {
    console.log(arg[0], arg[1], arg[2]);
    this.taskList.push(
      new Task(arg[0], this.taskList.length, arg[1], arg[2])
    );
  }

  onChange(filterOption){
    this.filterDone = filterOption;
    console.log(this.filterDone);
  }

  onPriorityChange(filterOption){
    this.filterPriority = filterOption;
    console.log(this.filterPriority);
  }

  onCategoryChange(filterOption){
    this.filterCategory = filterOption;
    console.log(this.filterCategory);
  }
}
