import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

// TaskDisplay
// @Component({
//   selector: 'task-display',
//   inputs: ['task'],
//   template: `
//     <h3>{{ task.description }}</h3>
//   `
// })
//
// export class TaskComponent {
//   public task: Task;
// }

// TaskListComponent
// @Component({
//   selector: 'task-list',
//   inputs: ['taskList'],
//   outputs: ['onTaskSelect'],
//   directives: [TaskComponent],
//   template: `
//   <task-display *ngFor="#currentTask of taskList"
//       (click)="taskClicked(currentTask)"
//       [class.selected]="currentTask === selectedTask"
//       [task]="currentTask">
//   </task-display>
//   `
// })
//
// export class TaskListComponent {
//   public taskList: Task[];
//   public onTaskSelect: EventEmitter<Task>;
//   public selectedTask: Task;
//   constructor() {
//     this.onTaskSelect = new EventEmitter();
//   }
//   taskClicked(clickedTask: Task): void {
//     console.log("Child", clickedTask);
//     this.selectedTask = clickedTask;
//     this.onTaskSelect.emit(clickedTask);
//   }
// }


// MyApp Component <<ROOT>>
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0, "normal", "work"),
      new Task("Learn Kung Fu.", 1, "normal", "hobby"),
      new Task("Rewatch all the Lord of the Rings movies.", 2, "normal", "home"),
      new Task("Do the laundry.", 3, "normal", "home")
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log("Parent", clickedTask);
  }
}

// export class Task {
//   public done: boolean = false;
//   constructor(public description: string, public id: number) {
//   }
// }
