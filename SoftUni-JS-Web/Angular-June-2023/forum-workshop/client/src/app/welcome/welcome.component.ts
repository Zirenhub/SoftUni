import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(private userService: UserService) {}

  get isLoggedIn() {
    return this.userService.isLogged;
  }
}
