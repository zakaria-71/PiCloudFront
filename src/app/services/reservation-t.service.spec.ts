import { TestBed } from '@angular/core/testing';

import { ReservationTService } from './reservation-t.service';

describe('ReservationTService', () => {
  let service: ReservationTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
