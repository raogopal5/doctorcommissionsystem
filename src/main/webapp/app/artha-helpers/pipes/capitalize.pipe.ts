import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      value = value.toLowerCase();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
