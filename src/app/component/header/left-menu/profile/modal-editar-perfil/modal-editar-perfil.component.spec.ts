import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPerfilComponent } from './modal-editar-perfil.component';

describe('ModalEditarPerfilComponent', () => {
  let component: ModalEditarPerfilComponent;
  let fixture: ComponentFixture<ModalEditarPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarPerfilComponent]
    });
    fixture = TestBed.createComponent(ModalEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
