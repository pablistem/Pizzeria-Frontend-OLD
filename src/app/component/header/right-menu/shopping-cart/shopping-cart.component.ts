import { Component } from '@angular/core';
import { ProductCartComponent } from './product-cart/product-cart.component';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
    standalone: true,
    imports: [ProductCartComponent]
})
export class ShoppingCartComponent {

  constructor() { }

}
