import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { CurrentThemeComponent } from './current-theme/current-theme.component';

@NgModule({
  declarations: [CreateComponent, CurrentThemeComponent],
  imports: [CommonModule, ThemeRoutingModule],
})
export class ThemeModule {}
