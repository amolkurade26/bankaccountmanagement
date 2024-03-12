import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    console.log(value);
    console.log(args[0]);

    const property= args[0]; //we assume the first argument

    return value.sort((obj1,obj2) => obj1[property] > obj2[property] ? 1: -1)
  }
}
