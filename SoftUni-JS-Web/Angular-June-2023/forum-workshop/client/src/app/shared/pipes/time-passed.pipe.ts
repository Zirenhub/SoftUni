import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  transform(dateString: string, ...args: unknown[]): string {
    return moment(dateString).fromNow();
  }
}
