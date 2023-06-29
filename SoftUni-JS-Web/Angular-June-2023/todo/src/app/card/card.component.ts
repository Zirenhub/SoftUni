import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/types/todo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() todo: Todo | undefined;
  @Input() openedSettingsID: string | null = null;
  @Output() openSettings = new EventEmitter<string>();
  @Output() openView = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  handleDelete() {
    this.delete.emit(this.todo?._id);
  }

  handleSettings() {
    this.openSettings.emit(this.todo?._id);
  }

  handleView() {
    this.openView.emit(this.todo?._id);
  }
}
