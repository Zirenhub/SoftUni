import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { LoginData } from 'src/types/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        emailValidator(EMAIL_DOMAINS),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  login() {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value as LoginData;

    this.userService.login({ email, password }).subscribe({
      next: (data) => {
        this.router.navigate(['/home']);
      },
    });
  }
}
