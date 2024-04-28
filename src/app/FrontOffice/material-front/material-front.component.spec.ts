import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFrontComponent } from './material-front.component';

describe('MaterialFrontComponent', () => {
  let component: MaterialFrontComponent;
  let fixture: ComponentFixture<MaterialFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
