import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimePassedPipe } from './pipes/time-passed.pipe';

@NgModule({
  declarations: [EmailDirective, ShortenPipe, TimePassedPipe],
  imports: [CommonModule],
  exports: [EmailDirective, ShortenPipe, TimePassedPipe],
})
export class SharedModule {}
