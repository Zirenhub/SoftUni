import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { passwordMatchValidator } from 'src/app/shared/validators/password-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        emailValidator(EMAIL_DOMAINS),
      ],
    ],
    tel: [''],
    passwordGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [passwordMatchValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  register() {
    console.log(this.form);
  }
}
