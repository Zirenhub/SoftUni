import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './main/themes-list/themes-list.component';
import { RecentPostsComponent } from './main/recent-posts/recent-posts.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';
import { UserService } from './auth/user.service';
import { AuthActivate } from './core/guards/auth.activate';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListComponent,
    RecentPostsComponent,
    ProfileComponent,
  ],
  imports: [
    WelcomeComponent,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    AuthModule,
    ThemeModule,
  ],
  providers: [ApiService, UserService, AuthActivate],
  bootstrap: [AppComponent],
})
export class AppModule {}
