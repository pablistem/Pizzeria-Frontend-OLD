import { TestBed } from '@angular/core/testing';

import { CategoryBOService } from './category-bo.service';

describe('CategoryBOService', () => {
  let service: CategoryBOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryBOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
