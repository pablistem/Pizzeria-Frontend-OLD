import { TestBed } from '@angular/core/testing';

import { RightEventService as RightEventService } from './right-event.service';

describe('RightServiceService', () => {
  let service: RightEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
