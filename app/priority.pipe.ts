import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from './task.model';


@Pipe({
  name: "priority",
  pure: false
})

export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args){
    console.log('selected task: ', args[1]);
    var desiredPriorityState = args[0];

    if(desiredPriorityState === "high"){
      return input.filter((task) => {
        return task.priority === "high";
      });
    } else if (desiredPriorityState === "normal") {
      return input.filter((task) => {
        return task.priority === "normal"
      });
    } else if (desiredPriorityState === "low") {
      return input.filter((task) => {
        return task.priority === "low"
      });
    } else {
      return input;
    }
  }
}
