import { Injectable } from '@angular/core';
import { Todo } from 'src/types/todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {
  constructor() {}

  todos: Todo[] = [];

  createTodo(name: string, content: string, due: Date) {
    const newTodo: Todo = {
      name: name,
      content: content,
      due: due,
      _id: uuidv4(),
      isChecked: false,
    };
    this.todos.push(newTodo);
  }

  getTodos() {
    return this.todos;
  }
}
