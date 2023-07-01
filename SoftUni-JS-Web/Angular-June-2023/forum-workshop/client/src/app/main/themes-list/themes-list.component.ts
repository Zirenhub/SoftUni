import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  constructor(private api: ApiService) {}

  themes: Theme[] = [];

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        const themesSortedBySubs = themes.sort(
          (a, b) => b.subscribers.length - a.subscribers.length
        );
        this.themes = themesSortedBySubs;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
