import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menorPrecioHotel'
})
export class MenorPrecioHotelPipe implements PipeTransform {

  transform(value: any[]): any {
    let menorValor = 1000000;

    value.map(function(item){
      if (parseFloat(item.AmountAfterTax) < menorValor) {
        menorValor = parseFloat(item.AmountAfterTax);
      }
    });

    return menorValor;
  }

}
