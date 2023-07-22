import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  isEditPage: boolean = false;
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
  });

  constructor(private fb: FormBuilder) {}

  toggleEdit() {
    this.isEditPage = !this.isEditPage;
  }

  handleSave() {
    this.toggleEdit();
    // todo
  }
}
