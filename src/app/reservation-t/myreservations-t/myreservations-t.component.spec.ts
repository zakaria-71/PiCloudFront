import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreservationsTComponent } from './myreservations-t.component';

describe('MyreservationsTComponent', () => {
  let component: MyreservationsTComponent;
  let fixture: ComponentFixture<MyreservationsTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyreservationsTComponent]
    });
    fixture = TestBed.createComponent(MyreservationsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
