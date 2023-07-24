import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Product | undefined;
  @Output() productoEmmiter: EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
    this.producto = {
      id: 1,
      name: 'Pizza de muzzarella',
      description: 'Informacion',
      image: '../../../assets/images/pizzero.svg',
      price: 5000,
      stock: 20,
      category: 'categoria'
    }
  }

  emitirProducto() {
    this.productoEmmiter.emit(this.producto)
  }

}
