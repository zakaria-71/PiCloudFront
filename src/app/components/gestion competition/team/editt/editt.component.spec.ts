import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittComponent } from './editt.component';

describe('EdittComponent', () => {
  let component: EdittComponent;
  let fixture: ComponentFixture<EdittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdittComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
