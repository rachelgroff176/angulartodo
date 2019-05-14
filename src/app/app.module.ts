import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule ],
  declarations: [ TodoComponent ],
  bootstrap: [ TodoComponent ]
})
export class AppModule { }
