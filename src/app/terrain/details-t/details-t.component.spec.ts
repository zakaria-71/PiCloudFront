import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTComponent } from './details-t.component';

describe('DetailsTComponent', () => {
  let component: DetailsTComponent;
  let fixture: ComponentFixture<DetailsTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTComponent]
    });
    fixture = TestBed.createComponent(DetailsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
