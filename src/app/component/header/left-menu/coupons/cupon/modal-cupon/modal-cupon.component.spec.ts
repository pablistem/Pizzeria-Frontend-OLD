import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCuponComponent } from './modal-cupon.component';

describe('ModalCuponComponent', () => {
  let component: ModalCuponComponent;
  let fixture: ComponentFixture<ModalCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ModalCuponComponent]
});
    fixture = TestBed.createComponent(ModalCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
