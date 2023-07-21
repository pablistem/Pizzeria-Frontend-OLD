import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { longitudMaxima } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.scss']
})
export class ActualizarCategoriaComponent implements OnInit {
  constructor(
    private ngbActiveModal: NgbActiveModal,
    private categoryService: CategoryService
  ) { }

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, longitudMaxima(64)]),
  });
  errorBackend = ''
  @Input() categoria: Category | undefined;

  ngOnInit(): void {
    this.formulario.patchValue({
      name: this.categoria?.name,
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
    const response = await firstValueFrom(this.categoryService.update(this.obtenerBody(), this.categoria?.id!))
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
      id: this.formulario.get('id')?.value!,
      name: this.formulario.get('name')?.value!,
    }
    return request;
  }
}
