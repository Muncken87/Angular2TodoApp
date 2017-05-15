import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {
  todos = [];  // Todos array
  selectedTodo: Todo;
  @Input() todo: Todo;
  

  constructor(private todoService: TodoService){}

  // Add new todo with our values from our form

  addTodo(value: any){
    this.todoService.addTodo(value);
    console.log("Hello from component");
  }

   // Delete our todo, and take our current todo and splice it out 

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }
  // Toggle between complete and not complete
   completedTodo(todo){
    todo.isCompleted = !todo.isCompleted;
    todo.completed = !todo.completed;
  }

  // Fetch our todos from our todoservice
  getTodos(): void{
    this.todos = this.todoService.getTodos();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    console.log(todo);
  }

  // On component lifecycle start fetch our todos array

  ngOnInit(){
     this.getTodos();
  }

}
