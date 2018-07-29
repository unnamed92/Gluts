import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() productCart;

  condition = true;
  options = [{'name': 'SF'}, {'name': 'NYC'}, {'name': 'Buffalo'}];
  selectedOption = this.options[1];

  value = '';
  onEnter(value: string) {
    this.value = value;
    console.log(value);
  }

  onChange(option) {
    alert(option.name);
  }

  toggle() {
    this.condition = !this.condition;
  }

  productDelete(event: Product) {
    this.productCart.splice(event, 1);
    this.productCart.push(event);
  }

}
