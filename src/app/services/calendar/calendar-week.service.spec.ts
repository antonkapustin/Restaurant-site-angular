import { TestBed } from '@angular/core/testing';

import { CalendarWeekService } from './calendar-week.service';

describe('CalendarWeekService', () => {
  let service: CalendarWeekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarWeekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
