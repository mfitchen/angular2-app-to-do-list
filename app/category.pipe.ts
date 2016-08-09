import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from './task.model';


@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Task[], args){
    console.log('selected task: ', args[1]);
    var desiredCategoryState = args[0];

    if(desiredCategoryState === "work"){
      return input.filter((task) => {
        return task.category === "work";
      });
    } else if (desiredCategoryState === "hobby") {
      return input.filter((task) => {
        return task.category === "hobby"
      });
    } else if (desiredCategoryState === "home") {
      return input.filter((task) => {
        return task.category === "home"
      });
    } else {
      return input;
    }
  }
}
