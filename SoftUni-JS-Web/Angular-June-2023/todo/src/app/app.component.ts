import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

type Todo = {
  name: string;
  content: string;
  due: Date;
  createDate: Date;
};

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
    name: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    due: new FormControl(null, [Validators.required, validateDate]),
  });

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
      console.log(errors);
      return;
    }
    const { name, content, due } = this.createForm.value;
    console.log(name, content, due);
  }

  openModal() {
    this.createModalIsOpen = true;
  }

  closeModal() {
    this.createModalIsOpen = false;
  }
}
