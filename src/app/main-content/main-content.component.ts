import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {
  selected: boolean;
  @Input() products;

  @Output() pushToCart: EventEmitter<any> = new EventEmitter();

  addToCart(item: Product) {
    this.pushToCart.emit(item);
  }
  select($event) {
    this.selected = true;
    console.log($event);
  }
}
