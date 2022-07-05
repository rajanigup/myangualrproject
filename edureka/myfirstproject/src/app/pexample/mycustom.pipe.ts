import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustom'
})
export class MycustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value==='')
      return 'password field is empty'
    if(value.length<6||value.length>16)
      return 'password  is out of Range'
    return 'password accepted';
  }

}
