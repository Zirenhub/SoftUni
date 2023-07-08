import { Injectable } from '@angular/core';

type User = {
  _id: string;
  email: string;
  firstName: string;
};

@Injectable()
export class UserService {
  userKey: string = 'forumUser';
  user: User | undefined;

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.userKey);
      if (lsUser) {
        this.user = JSON.parse(lsUser);
      }
    } catch (err) {
      this.user = undefined;
    }
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  login() {
    const user = {
      _id: '5fa64b162183ce1728ff371d',
      email: 'test@abv.bg',
      firstName: 'Erdinch',
    };
    // hardcoded for now

    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.user = user;
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.userKey);
  }
}
