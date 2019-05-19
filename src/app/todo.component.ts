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

  onDelete(item) {
    this.tasks = this.tasks.filter(i => i.name !== item.name)
  }

  onEdit(item) {
    this.task = item + ' ';
  }

  onStrike(item) {
    this.tasks.filter(i => i.name === item.name)[0].strike = !this.tasks.filter(i => i.name === item.name)[0].strike;
  }

  constructor() { }

  ngOnInit() {
    this.title = "To Do List";
  }


}