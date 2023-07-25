import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { LoginData, RegisterData, User } from 'src/types/auth';
import { Profile } from 'src/types/profile';

@Injectable()
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: User | undefined;
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  register(registerData: RegisterData) {
    return this.http.post<User>('/api/register', registerData).pipe(
      tap(() => {
        this.user$$.next(undefined);
      })
    );
  }

  login(loginData: LoginData) {
    return this.http.post<User>('/api/login', loginData).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  logout() {
    return this.http.post('/api/logout', {}).pipe(
      tap(() => {
        this.user$$.next(undefined);
      })
    );
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile').pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  updateProfile(profileData: Profile) {
    return this.http.put<User>('/api/users/profile', profileData).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
