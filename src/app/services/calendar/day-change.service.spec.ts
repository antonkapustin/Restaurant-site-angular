import { TestBed } from '@angular/core/testing';

import { DayChangeService } from './day-change.service';

describe('DayChangeService', () => {
  let service: DayChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
