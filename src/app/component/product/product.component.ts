import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  panelOpenState = false;
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
