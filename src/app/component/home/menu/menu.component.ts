import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DetallesComponent } from '../detalles/detalles.component';
import { ProductoComponent } from '../producto/producto.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
    imports: [ProductoComponent, DetallesComponent]
})
export class MenuComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.anchoPantalla = window.innerWidth;
  }

  categoria: string = '';
  productoSeleccionado: Product | undefined;
  anchoPantalla: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
    });
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any): void {
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
