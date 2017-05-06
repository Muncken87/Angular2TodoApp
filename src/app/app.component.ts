import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Todo List';
  todos = [];
  selectedTodo: Todo;


  constructor(private todoService: TodoService){
  }

  addTodo(value: any){
    this.todoService.addTodo(value);
    console.log("Hello from component");
  }

   deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }
  // Toggle between complete and not complete
   completedTodo(todo){
    this.todoService.completedTodo(todo);
  }

  getTodos(): void{
    this.todos = this.todoService.getTodos();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  ngOnInit(){
     this.getTodos();
  }


}
