import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamssComponent } from './teamss.component';

describe('TeamssComponent', () => {
  let component: TeamssComponent;
  let fixture: ComponentFixture<TeamssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
