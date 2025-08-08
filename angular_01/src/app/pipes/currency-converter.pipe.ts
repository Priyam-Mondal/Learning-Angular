import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    if (args.length > 0) {
      let [params] = args;
      return value * params;
    }else{
      return value*80 + "$";
    }
  }
}
