import { TestBed } from '@angular/core/testing';

import { ReservationCService } from './reservation.service';

describe('ReservationService', () => {
  let service: ReservationCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
