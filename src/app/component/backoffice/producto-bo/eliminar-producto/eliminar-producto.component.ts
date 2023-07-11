import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss']
})
export class EliminarProductoComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private productService: ProductService
  ) { }

  @Input() producto: Product | undefined;
  errorBackend: string = ''

  ngOnInit(): void { }

  btnCancelar() {
    this.ngbActiveModal.close(false);
  }

  async btnContinuar() {
    const response = await firstValueFrom(this.productService.delete(this.producto?.id!))
      .catch(err => {
        console.error(err)
        this.errorBackend = err
        return
      })
    console.log(response)
    this.btnCancelar()
  }

}
