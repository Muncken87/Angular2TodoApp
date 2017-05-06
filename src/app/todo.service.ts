import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
todos: Todo[] = [];
completed = false;
selectedTodo: Todo;

  constructor() { }

  getTodos(){
    return this.todos;
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
  
  // Add a new todo and push it to our todos array
  addTodo(value: any) {
     this.todos.push(value);
     console.log("This was pushed");
  } 

  // Delte our todo and remove it from the index of 1
  deleteTodo(todo) {
    this.todos.splice(todo,1);
    console.log("This todo has been deleted"+ todo);
  }

  // Toggle between complete and not complete
   completedTodo(todo){
    todo.isCompleted = !todo.isCompleted;
    todo.completed = !todo.completed;
  }

}
