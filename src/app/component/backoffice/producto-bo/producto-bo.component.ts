import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/model/product';
import { ProductBOService } from 'src/app/service/product-bo.service';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

@Component({
  selector: 'app-producto-bo',
  templateUrl: './producto-bo.component.html',
  styleUrls: ['./producto-bo.component.scss']
})
export class ProductoBOComponent implements OnInit {

  constructor(
    private productService : ProductBOService,
    private ngbModal: NgbModal
  ) { }

  public products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (value) => {
        this.products = value.products
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  accion(accion: string) {
    switch (accion) {
      case 'crear':
        this.ngbModal.open(CrearProductoComponent);
        break;
      case 'actualizar':

        break;
      case 'eliminar':

        break;
      default:
        alert('Soy un pelotudo');
        break;
    }
  }
}
