import { TestBed } from '@angular/core/testing';

import { ReservationMService } from './reservation-m.service';

describe('ReservationMService', () => {
  let service: ReservationMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
