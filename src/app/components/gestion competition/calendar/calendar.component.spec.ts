import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationTComponent } from 'src/app/reservation-t/reservation-t.component';

describe('ReservationTComponent', () => {
  let component: ReservationTComponent;
  let fixture: ComponentFixture<ReservationTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
