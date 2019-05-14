import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delete-todo',
    templateUrl: './delete-todo.component.html',
    styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {
    title: string;

    constructor() { }

    ngOnInit() {
        this.title = "Delete item on To Do List";
    }

}
