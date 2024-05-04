import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTComponent } from './add-t.component';

describe('AddTComponent', () => {
  let component: AddTComponent;
  let fixture: ComponentFixture<AddTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTComponent]
    });
    fixture = TestBed.createComponent(AddTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
