import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductBOService } from 'src/app/service/product-bo.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-producto-bo',
  templateUrl: './producto-bo.component.html',
  styleUrls: ['./producto-bo.component.scss']
})
export class ProductoBOComponent implements OnInit {

  constructor(
    private productService : ProductBOService,
    private modalService: NgbModal
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

  openModal(content: any): NgbModalRef {
    return this.modalService.open(content, { centered: true });
  }

  accion(accion: string) {
    switch (accion) {
      case 'crear':

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
