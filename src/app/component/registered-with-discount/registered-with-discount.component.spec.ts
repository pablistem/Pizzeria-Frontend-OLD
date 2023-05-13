import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredWithDiscountComponent } from './registered-with-discount.component';

describe('RegisteredWithDiscountComponent', () => {
  let component: RegisteredWithDiscountComponent;
  let fixture: ComponentFixture<RegisteredWithDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredWithDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredWithDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
