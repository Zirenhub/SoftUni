import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength = 5): string {
    if (value.length > maxLength) {
      return `${value.slice(0, maxLength)}...`;
    }

    return value;
  }
}
