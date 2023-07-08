import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  {
    path: 'add-theme',
    canActivate: [AuthActivate],
    component: CreateComponent,
  },
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: ':themeId', component: CurrentThemeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
