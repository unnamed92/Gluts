import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() productCart;
  @Input() products;
  @Input() searchValue;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEnterEvent: EventEmitter<any> = new EventEmitter();

  public condition = true;
  public showParams = false;

  public value = '';
  public searchParam = ['По умолчанию', 'Названию', 'Артикулу', 'Брэнду'];
  public onEnter(value: string) {
    this.onEnterEvent.emit(value);
  }

  public onChange(option) {
    alert(option.name);
  }

  public toggle() {
    this.condition = !this.condition;
  }

  public searchParamsToggle() {
    this.showParams = !this.showParams;
  }

  productDelete(event: Product) {
    this.productCart.splice(event, 1);
    this.productCart.push(event);
  }

}
