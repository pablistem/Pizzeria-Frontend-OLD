import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-cupon',
    templateUrl: './modal-cupon.component.html',
    styleUrls: ['./modal-cupon.component.scss'],
    standalone: true
})
export class ModalCuponComponent {

  constructor (private ngbActiveModal : NgbActiveModal) {

  }

  btnContinuar() {
    this.ngbActiveModal.close();
  }

  btnCancelar() {
    this.ngbActiveModal.close();
  }

}
