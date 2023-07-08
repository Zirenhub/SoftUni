import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/auth/user.service';
import { Theme } from 'src/types/theme';

type SubscribedTheme = Theme & { isSubscribed: boolean };

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: SubscribedTheme[] = [];

  constructor(private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        const themesSortedBySubs = themes.sort(
          (a, b) => b.subscribers.length - a.subscribers.length
        );
        const assignIsSubscribed = themesSortedBySubs.map((x) => {
          return { ...x, isSubscribed: this.isSubscribed(x.subscribers) };
        });
        this.themes = assignIsSubscribed;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get isLoggedIn() {
    return this.userService.isLogged;
  }

  isSubscribed(subscribers: string[]): boolean {
    if (this.userService.user) {
      return subscribers.includes(this.userService.user?._id);
    }
    return false;
  }
}
