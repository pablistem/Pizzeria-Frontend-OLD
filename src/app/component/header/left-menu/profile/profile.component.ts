import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarPerfilComponent } from "./modal-editar-perfil/modal-editar-perfil.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class ProfileComponent implements OnInit {

  constructor(private ngbModal: NgbModal) {

  }

  public isLogged: boolean = true;

  ngOnInit(): void {
  }

  abrirModal() {
    this.ngbModal.open(ModalEditarPerfilComponent, {
      centered: true, size: "md"
    });
  }

}
