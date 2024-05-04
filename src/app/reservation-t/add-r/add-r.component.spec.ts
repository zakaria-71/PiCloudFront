import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRComponent } from './add-r.component';

describe('AddRComponent', () => {
  let component: AddRComponent;
  let fixture: ComponentFixture<AddRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRComponent]
    });
    fixture = TestBed.createComponent(AddRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
