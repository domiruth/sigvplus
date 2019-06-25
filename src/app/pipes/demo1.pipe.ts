import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo1'
})
export class Demo1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
