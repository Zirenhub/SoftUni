import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { passwordMatchValidator } from 'src/app/shared/validators/password-match-validator';
import { UserService } from '../user.service';
import { RegisterData } from 'src/types/auth';
import { Router } from '@angular/router';

type PasswordGroup = {
  password: string;
  rePassword: string;
};

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  register() {
    if (this.form.invalid) {
      return;
    }

    const { username, email, tel, passwordGroup } = this.form.value;
    const { password, rePassword } = passwordGroup as PasswordGroup;

    const registerData = {
      username,
      email,
      tel,
      password,
      rePassword,
    } as RegisterData;

    this.userService.register(registerData).subscribe({
      next: (data) => {
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
