import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    post: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  navigateHome() {
    this.router.navigate(['/']);
  }

  submit() {
    const { title, post } = this.form.value;
    if (title && post) {
      this.api.createTheme(title, post).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(`Error: ${err.message}`);
        },
      });
    }
  }
}
