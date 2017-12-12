import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseConverter'
})
export class UpperCaseConverterPipe implements PipeTransform {

  transform(value: any, name: any): any {
    const temp = name.split('');
    temp[0] = temp[0].toUpperCase();
    return temp.join('');
  }

}
