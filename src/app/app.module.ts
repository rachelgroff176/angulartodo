import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ TodoComponent ],
  bootstrap: [ TodoComponent ]
})
export class AppModule { }
