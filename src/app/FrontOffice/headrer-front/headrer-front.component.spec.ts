import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadrerFrontComponent } from './headrer-front.component';

describe('HeadrerFrontComponent', () => {
  let component: HeadrerFrontComponent;
  let fixture: ComponentFixture<HeadrerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadrerFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadrerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
