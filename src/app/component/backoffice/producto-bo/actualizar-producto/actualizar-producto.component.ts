import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { longitudMaxima } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private productService: ProductService
  ) { }

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, longitudMaxima(64)]),
    description: new FormControl('', [Validators.required, longitudMaxima(256)]),
    image: new FormControl('', [Validators.required, longitudMaxima(256)]),
    category: new FormControl('', [Validators.required, longitudMaxima(46)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    stock: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  errorBackend = ''
  @Input() producto: Product | undefined;

  ngOnInit(): void {
    this.formulario.patchValue({
      name: this.producto?.name,
      description: this.producto?.description,
      image: this.producto?.image,
      category: this.producto?.category,
      price: this.producto?.price.toString(),
      stock: this.producto?.stock.toString()
    });
  }

  isInvalid(formControl: string) {
    let control = this.formulario.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.formulario.get(campo);
    if (control?.hasError('longitudExcedida')) {
      return 'Longitud máxima excedida';
    }
    if (control?.hasError('min')) {
      return 'Debe ingresar un número mayor a 0';
    }
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';
  }

  btnCancelar() {
    this.ngbActiveModal.close(false);
  }

  async btnContinuar() {
    const response = await firstValueFrom(this.productService.update(this.obtenerBody(), this.producto?.id!))
      .catch(err => {
        console.error(err)
        this.errorBackend = err
        return
      })
    console.log(response)
    this.btnCancelar()
  }

  private obtenerBody() {
    const request = {
      name: this.formulario.get('name')?.value!,
      description: this.formulario.get('description')?.value!,
      image: this.formulario.get('image')?.value!,
      category: this.formulario.get('category')?.value!,
      price: parseInt(this.formulario.get('price')?.value!, 10),
      stock: parseInt(this.formulario.get('stock')?.value!, 10),
    }
    return request;
  }

}
