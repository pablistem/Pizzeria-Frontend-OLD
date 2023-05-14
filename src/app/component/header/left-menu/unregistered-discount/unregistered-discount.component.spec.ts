import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredDiscountComponent } from './unregistered-discount.component';

describe('UnregisteredDiscountComponent', () => {
  let component: UnregisteredDiscountComponent;
  let fixture: ComponentFixture<UnregisteredDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
