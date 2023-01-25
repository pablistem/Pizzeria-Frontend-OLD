import { Component, OnInit } from '@angular/core';
import { MenuPage } from 'src/app/model/menu-page';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  panelOpenState = false;
  pizzas: Product[] = [
    {
      name: 'Napolitana',
      price: 2000,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Calabresa',
      price: 2200,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Fugazzeta',
      price: 1800,
      image: 'https://source.unsplash.com/random'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
