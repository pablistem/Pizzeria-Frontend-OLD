import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-recomendaciones',
    templateUrl: './recomendaciones.component.html',
    styleUrls: ['./recomendaciones.component.scss'],
    standalone: true,
    imports: [NgClass, NgFor, ProductoComponent]
})
export class RecomendacionesComponent {

  @Output() categoriaEmitter: EventEmitter<string> = new EventEmitter<string>();
  repeticiones: number[] = [1, 2, 3, 4, 5, 6];
  esCelular: boolean = false;

  constructor() {
    this.esCelular = window.innerWidth < 1000;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.esCelular = window.innerWidth < 1000;
  }

  categoriaSeleccionada(categoria: string) {
    this.categoriaEmitter.emit(categoria);
  }

}
