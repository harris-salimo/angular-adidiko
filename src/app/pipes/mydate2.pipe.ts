import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate2'
})
export class Mydate2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
