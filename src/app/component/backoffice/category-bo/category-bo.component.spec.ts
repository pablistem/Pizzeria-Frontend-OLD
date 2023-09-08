import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBOComponent } from './category-bo.component';

describe('CategoryComponent', () => {
  let component: CategoryBOComponent;
  let fixture: ComponentFixture<CategoryBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CategoryBOComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
