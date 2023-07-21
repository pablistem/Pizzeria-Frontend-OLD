import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCategoriaComponent } from './actualizar-categoria.component';

describe('ActualizarCategoriaComponent', () => {
  let component: ActualizarCategoriaComponent;
  let fixture: ComponentFixture<ActualizarCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCategoriaComponent]
    });
    fixture = TestBed.createComponent(ActualizarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
