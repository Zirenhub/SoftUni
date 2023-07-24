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
import { ThemeModule } from './theme/theme.module';
import { UserService } from './auth/user.service';
import { AuthActivate } from './core/guards/auth.activate';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileModule } from './profile/profile.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { appInterceptorProvider } from './app-interceptor';
import { AuthentiacteComponent } from './authentiacte/authentiacte.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListComponent,
    RecentPostsComponent,
    NotFoundComponent,
    AuthentiacteComponent,
  ],
  imports: [
    WelcomeComponent,
    BrowserModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    ThemeModule,
    ProfileModule,
    // always load the app routing last, otherwise 404 page will always have priority
    AppRoutingModule,
  ],
  providers: [ApiService, UserService, AuthActivate, appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
