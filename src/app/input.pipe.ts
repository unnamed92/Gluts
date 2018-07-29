import { Pipe, PipeTransform, Input, Output, EventEmitter } from '@angular/core';

@Pipe({
  name: 'input',
  pure: false
})
export class InputPipe implements PipeTransform {

  @Input() value;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEnter: EventEmitter<any> = new EventEmitter();


  transform(array: any, value?: string): any {
    return array.filter((item: any) => {
      console.log(value);
      return item === value;
    });
  }

}
