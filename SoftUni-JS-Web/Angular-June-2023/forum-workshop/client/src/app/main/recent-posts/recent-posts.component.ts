import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/types/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css'],
})
export class RecentPostsComponent implements OnInit {
  constructor(private api: ApiService) {}

  posts: Post[] = [];

  ngOnInit(): void {
    this.api.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => {
        console.log(`Error gettings posts`, err.message);
      },
    });
  }
}
