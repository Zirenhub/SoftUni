import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

type Data = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login({ email, password }: Data) {
    // handle the data in the future

    this.userService.login();
    this.router.navigate(['/home']);
  }
}
