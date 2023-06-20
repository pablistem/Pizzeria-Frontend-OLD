import { TestBed } from '@angular/core/testing';

import { LeftEventService as LeftEventService } from './left-event.service';

describe('LeftServiceService', () => {
  let service: LeftEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
