import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {
  @Input() todo: Todo;
  
  

  constructor() { }

  ngOnInit() {
  }

  

}
