import { TestBed } from '@angular/core/testing';

import { ProductBOService } from './product-bo.service';

describe('ProductBOService', () => {
  let service: ProductBOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
