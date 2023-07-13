import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private api: ApiService, private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }

  submit(themeName: string, postText: string) {
    // implement more validation later
    // Unauthorized: invalid token, fix later
    if (themeName && postText) {
      this.api.createTheme(themeName, postText).subscribe({
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
