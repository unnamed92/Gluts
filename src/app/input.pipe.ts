import { Pipe, PipeTransform, Input} from '@angular/core';

@Pipe({
  name: 'input',
  pure: false
})
export class InputPipe implements PipeTransform {

  @Input() value;
  // tslint:disable-next-line:no-output-on-prefix
  @Input() searchParam;

  transform(array: any, value?: string): any {
    if (value === null) {
      return [];
    } else if (value.length <= 2) {
      return [];
    }  else {
      return array.filter((item: any) => item.name.indexOf(String(value)) !== -1 || item.articul.indexOf(String(value)) !== -1);
    }
  }

}
