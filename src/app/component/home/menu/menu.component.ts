import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() categoria: string = '';
  productoSeleccionado: Product | undefined;

  seleccionarProducto(event: any) {
    this.productoSeleccionado = event
  }

}
