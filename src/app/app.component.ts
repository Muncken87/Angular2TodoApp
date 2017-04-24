import { Component } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';
// import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Todo List';
  selectedTodo: Todo;
  todos = [];
  completed = false;

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  addTodo(value: any) {
    this.todos.push(value);
    console.log("This was pushed");
  } 
  deleteTodo(todo) {
    this.todos.splice(todo,1);
    console.log("This todo has been deleted");
  }
  completedTodo(todo){
    todo.isCompleted = !todo.isCompleted;
    todo.completed = !todo.completed;
  }

  
}
