import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Todo } from 'src/types/todo';
import { TodosService } from './todos.service';

type FormErrors = {
  [key: string]: any;
};

function validateDate(control: FormControl): ValidationErrors | null {
  const nowDate = new Date();
  const dueDate = new Date(control.value);
  return dueDate > nowDate ? null : { invalid: true };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  createModalIsOpen = false;
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    due: new FormControl(new Date(), [Validators.required, validateDate]),
  });
  createFormErrors: FormErrors = {};

  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getErrors() {
    const errors: FormErrors = {};
    Object.keys(this.createForm.controls).forEach((controlName) => {
      const controlErrors = this.createForm.get(controlName)?.errors;
      if (controlErrors != null) {
        errors[controlName] = Object.keys(controlErrors);
      }
    });
    return errors;
  }

  onSubmit() {
    if (this.createForm.invalid) {
      const errors = this.getErrors();
      this.createFormErrors = errors;
      return;
    }
    const { name, content, due } = this.createForm.value;
    if (!name || !content || !due) {
      return;
    }
    this.todosService.createTodo(name, content, due);
    this.closeModal();
  }

  getTodos() {
    this.todos = this.todosService.getTodos();
  }

  openModal() {
    this.createModalIsOpen = true;
  }

  closeModal() {
    this.createModalIsOpen = false;
  }
}
