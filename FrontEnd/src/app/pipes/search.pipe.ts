import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    // else {
    //   console.log("Product not found");
    //   if (args) {

    //   }
    return value.filter((item: any) => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1);
    // }
  }
}
