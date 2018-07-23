import { Component, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() item;
  @Output() productDelete: EventEmitter<any> = new EventEmitter();

  deleteProduct(item: Product) {
    this.productDelete.emit(item);
    // console.log(item);
  }
}
