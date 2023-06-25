import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Todo } from 'src/types/todo';
import { v4 as uuidv4 } from 'uuid';

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
export class AppComponent {
  createModalIsOpen = false;
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    due: new FormControl(new Date(), [Validators.required, validateDate]),
  });
  createFormErrors: FormErrors = {};

  todos: Todo[] = [];

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
    const newTodo: Todo = {
      name: name as string,
      content: content as string,
      due: due as Date,
      _id: uuidv4(),
      isChecked: false,
    };
    this.todos.push(newTodo);
    this.closeModal();
  }

  openModal() {
    this.createModalIsOpen = true;
  }

  closeModal() {
    this.createModalIsOpen = false;
  }
}
