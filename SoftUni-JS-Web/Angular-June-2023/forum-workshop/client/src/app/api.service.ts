import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from 'src/types/theme';
import { Post } from 'src/types/post';
import { CurrentTheme } from 'src/types/theme-post';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<Theme[]>(`${environment.URL}/themes`);
  }

  getTheme(id: string) {
    return this.http.get<CurrentTheme>(`${environment.URL}/themes/${id}`);
  }

  getPosts(limit?: number) {
    const filter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${environment.URL}/posts${filter}`);
  }
}
