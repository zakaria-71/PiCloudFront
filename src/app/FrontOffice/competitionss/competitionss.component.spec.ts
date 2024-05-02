import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionssComponent } from './competitionss.component';

describe('CompetitionssComponent', () => {
  let component: CompetitionssComponent;
  let fixture: ComponentFixture<CompetitionssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
