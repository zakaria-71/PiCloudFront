import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMBackComponent } from './reservation-m-back.component';

describe('ReservationMBackComponent', () => {
  let component: ReservationMBackComponent;
  let fixture: ComponentFixture<ReservationMBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationMBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationMBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
