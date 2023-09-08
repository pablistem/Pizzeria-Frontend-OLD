import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoBOComponent } from './producto-bo.component';

describe('ProductoBOComponent', () => {
  let component: ProductoBOComponent;
  let fixture: ComponentFixture<ProductoBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProductoBOComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
