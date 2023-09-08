import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-editar-perfil',
    templateUrl: './modal-editar-perfil.component.html',
    styleUrls: ['./modal-editar-perfil.component.scss'],
    standalone: true
})
export class ModalEditarPerfilComponent {

  constructor (private ngbActiveModal : NgbActiveModal) {

  }

  btnGuardar() {
    this.ngbActiveModal.close();
  }

  btnCancelar() {
    this.ngbActiveModal.close();
  }

}
