import { Component, Input } from '@angular/core';
import { Todo } from 'src/types/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() todos: Todo[] = [];
  openedSettingsID: string | null = null;
  openedViewTodo: Todo | null = null;

  constructor(private todosService: TodosService) {}

  deleteTodo(id: string) {
    this.todos = this.todosService.deleteTodo(id);
  }

  toggleSetting(id: string) {
    this.openedSettingsID === id
      ? (this.openedSettingsID = null)
      : (this.openedSettingsID = id);
  }

  openView(id: string) {
    const todo = this.todos.find((x) => x._id === id);
    // could also just get the whole todo instead of only the id.
    if (todo) {
      this.openedViewTodo = todo;
    }
    this.openedSettingsID = null;
  }

  closeView() {
    this.openedViewTodo = null;
  }
}
