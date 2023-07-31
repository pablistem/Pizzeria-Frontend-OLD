import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {

  @Input() producto: Product | undefined;
  cantidad: number = 1;

  menos() {
    if (this.cantidad != 1) {
      this.cantidad--;
    }
  }

  mas() {
    this.cantidad++;
  }

}
