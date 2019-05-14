import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../assets/css/bootstrap.min.css']
})
export class TodoComponent implements OnInit {
  title: string; 

  constructor() { }

  ngOnInit() {
    this.title = "To Do List";
  }

}
