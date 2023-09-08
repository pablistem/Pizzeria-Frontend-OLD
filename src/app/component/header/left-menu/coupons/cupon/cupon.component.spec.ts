import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponComponent } from './cupon.component';

describe('CuponComponent', () => {
  let component: CuponComponent;
  let fixture: ComponentFixture<CuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CuponComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
