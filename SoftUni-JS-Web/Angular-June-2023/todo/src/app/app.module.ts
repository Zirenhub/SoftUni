import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [AppComponent, CardComponent, ListComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
