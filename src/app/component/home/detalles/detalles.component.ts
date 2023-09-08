import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.component.html',
    styleUrls: ['./detalles.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, FormsModule]
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
