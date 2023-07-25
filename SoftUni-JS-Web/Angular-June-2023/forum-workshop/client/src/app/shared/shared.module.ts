import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [EmailDirective, ShortenPipe],
  imports: [CommonModule],
  exports: [EmailDirective, ShortenPipe],
})
export class SharedModule {}
