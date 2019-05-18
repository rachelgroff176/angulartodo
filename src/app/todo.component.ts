import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../assets/css/bootstrap.min.css', './todo.component.css']
})
export class TodoComponent implements OnInit {
  title: string; 
  
  task: string;
  tasks = [];

  onClick() {
    this.tasks.push({ name: this.task });
    this.task = '';
  }

  onEdit(item) {
    this.task = item;
  }
  
  constructor() { }

  ngOnInit() {
    this.title = "To Do List";
  }


}
