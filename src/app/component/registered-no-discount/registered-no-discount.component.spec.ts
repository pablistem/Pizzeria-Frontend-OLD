import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredNoDiscountComponent } from './registered-no-discount.component';

describe('RegisteredNoDiscountComponent', () => {
  let component: RegisteredNoDiscountComponent;
  let fixture: ComponentFixture<RegisteredNoDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredNoDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredNoDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
