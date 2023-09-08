import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-producto-bo',
    templateUrl: './producto-bo.component.html',
    styleUrls: ['./producto-bo.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class ProductoBOComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private ngbModal: NgbModal
  ) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos() {
    this.productService.getAll().subscribe({
      next: (value) => {
        this.products = value.products
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  btnCrear() {
    this.ngbModal.open(CrearProductoComponent);
  }

  btnActualizar(id: number) {
    const modal = this.ngbModal.open(ActualizarProductoComponent);
    modal.componentInstance.producto = this.products[id];
    console.log(`Fue enviado el producto: ${this.products[id]}`)
  }

  btnEliminar(id: number) {
    const modal = this.ngbModal.open(EliminarProductoComponent);
    modal.componentInstance.producto = this.products[id];
  }

}
