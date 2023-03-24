import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  showRightBurguer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleRightBurguer() {
    this.showRightBurguer = !this.showRightBurguer;
  }

}
