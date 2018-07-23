import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {

  @Input() products;

  @Output() pushToCart: EventEmitter<any> = new EventEmitter();

  addToCart(item: any) {
    this.pushToCart.emit(item);
  }
}
