import { Component, Input } from '@angular/core';
import { Todo } from 'src/types/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() todos: Todo[] = [];
  currentOpenSettings: string | null = null;
  currentOpenView: string | null = null;

  toggleSetting(id: string) {
    if (this.currentOpenSettings === id) {
      this.currentOpenSettings = null;
    } else {
      this.currentOpenSettings = id;
    }
  }

  openView(id: string) {
    this.currentOpenView = id;
  }
}
