import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false // adding this may be a bad behaviour that can lead to perfomance issues 
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterString: string): any {

    if (value.length === 0) {
      return value;
    }
    if(filterString.length ===0){
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.status === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
