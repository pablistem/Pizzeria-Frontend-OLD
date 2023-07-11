import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from 'moment';

export function menorIgualAFechaActual(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const fechaIngresada = moment.utc(control.value, 'YYYY-MM-DD')
      const fechaActual = moment.utc().startOf('day')
      if (fechaIngresada.isAfter(fechaActual)) {
        return { fechaNoValida: true }
      }
    }
    return null;
  }
}

export function longitudMaxima(maximo: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value.length > maximo) {
      return { longitudExcedida: true };
    }
    return null;
  };
}

export function hastaPosteriorADesde(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const parentForm = form.parent;
    const fechaDesde: Date = parentForm?.get('fechaDesde')?.value;
    const fechaHasta: Date = parentForm?.get('fechaHasta')?.value;
    if (fechaDesde && fechaHasta) {
      if (fechaHasta < fechaDesde) {
        return { fechasInvalidas: true };
      }
    }
    return null;
  }
}


