import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return new Date(value).toLocaleDateString([], {month: 'long', year: 'numeric'});
  }

}
