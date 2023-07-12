import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/auth/user.service';
import { CurrentTheme } from 'src/types/theme-post';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme: CurrentTheme | undefined;
  likedPosts: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private user: UserService
  ) {}

  get isLoggedIn() {
    return this.user.isLogged;
  }

  ngOnInit(): void {
    const themeId = this.route.snapshot.paramMap.get('themeId');
    if (themeId) {
      this.api.getTheme(themeId).subscribe({
        next: (data) => {
          console.log(data);
          this.theme = data;
          this.theme.posts.forEach((post) => {
            if (this.user.user && post.likes.includes(this.user.user._id)) {
              this.likedPosts.push(post._id);
            }
          });
        },
        error: (err) => {
          console.log(`Error: ${err}`);
        },
      });
    }
  }
}
