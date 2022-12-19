import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: string): any {
    let reversedValue = "";
    for (let i = value.length; i >= 0; i--) {
      reversedValue += value.charAt(i);
    }
    return reversedValue;
  }

}
