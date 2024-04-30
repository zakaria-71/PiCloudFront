import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMFrontComponent } from './reservation-m-front.component';

describe('ReservationMFrontComponent', () => {
  let component: ReservationMFrontComponent;
  let fixture: ComponentFixture<ReservationMFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationMFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationMFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
