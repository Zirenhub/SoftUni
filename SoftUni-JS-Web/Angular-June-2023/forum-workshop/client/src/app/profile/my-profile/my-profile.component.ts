import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { Profile } from 'src/types/profile';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
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

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.user) {
      const { username, email, tel } = this.userService.user;
      this.form.setValue({ username, email, tel });
    }
  }

  toggleEdit() {
    this.isEditPage = !this.isEditPage;
  }

  handleSave() {
    if (this.form.invalid) {
      return;
    }
    const profileData = { ...this.form.value } as Profile;
    this.userService.updateProfile(profileData).subscribe(() => {
      this.toggleEdit();
    });
  }
}
