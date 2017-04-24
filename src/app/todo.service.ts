import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todos = [];
  lastId: number = 0;

  constructor() { }

  addTodo(todo: Todo){
    // this.todos.push(todo);
    console.log("Hello from service"+ todo)
  }

  // deleteTodo(todo){
  //   this.todos.splice(todo,1);
  //   console.log("This todo has been deleted");
  // }

}
