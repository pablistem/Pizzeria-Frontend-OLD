import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {

  @Output() eventoVolver: EventEmitter<void> = new EventEmitter();
  @Input() producto: Product | undefined;
  cantidad: number = 1;
  mostrarBtnVolver: boolean = false;

  constructor() {
    this.mostrarBtnVolver = window.innerWidth < 1000;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.mostrarBtnVolver = window.innerWidth < 1000;
  }

  menos() {
    if (this.cantidad != 1) {
      this.cantidad--;
    }
  }

  mas() {
    this.cantidad++;
  }

  volver() {
    this.producto = undefined
    this.eventoVolver.next();
  }
}
