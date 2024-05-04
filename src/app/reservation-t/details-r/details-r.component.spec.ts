import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRComponent } from './details-r.component';

describe('DetailsRComponent', () => {
  let component: DetailsRComponent;
  let fixture: ComponentFixture<DetailsRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsRComponent]
    });
    fixture = TestBed.createComponent(DetailsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
