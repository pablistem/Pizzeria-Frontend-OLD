import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { longitudMaxima } from 'src/app/validators/utils.validator';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-crear-categoria',
    templateUrl: './crear-categoria.component.html',
    styleUrls: ['./crear-categoria.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class CrearCategoriaComponent implements OnInit {
  constructor(
    private ngbActiveModal: NgbActiveModal,
    private categotyService: CategoryService
  ) { }

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, longitudMaxima(64)]),
    // image: new FormControl('', [Validators.required, longitudMaxima(256)]),
    // product: new FormControl('', [Validators.required, longitudMaxima(46)]),
  });
  errorBackend = ''

  ngOnInit(): void { }

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
    const response = await firstValueFrom(this.categotyService.create(this.obtenerBody()))
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
      // image: this.formulario.get('image')?.value!,
      // product: this.formulario.get('product')?.value!,
    }
    return request;
  }
}
