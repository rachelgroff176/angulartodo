import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteTodoComponent } from './delete-todo.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DeleteTodoComponent],
    exports: [DeleteTodoComponent]
})
export class DeleteTodoModule { }
