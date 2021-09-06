import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency'
})
export class MycurrencyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}
