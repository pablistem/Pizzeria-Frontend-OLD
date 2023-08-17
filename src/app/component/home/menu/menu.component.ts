import { Component, HostListener, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() categoria: string = '';
  productoSeleccionado: Product | undefined;
  anchoPantalla: number;

  constructor() {
    this.anchoPantalla = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.anchoPantalla = window.innerWidth;
  }

  seleccionarProducto(event: any) {
    this.productoSeleccionado = event
  }

  invisibilizarProductos() {
    return this.anchoPantalla < 1000 && this.productoSeleccionado
  }

  invisibilizarDetalles() {
    return this.anchoPantalla < 1000 && !this.productoSeleccionado
  }

  volver() {
    this.productoSeleccionado = undefined
  }

}
