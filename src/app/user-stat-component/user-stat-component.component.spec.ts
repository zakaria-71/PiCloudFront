import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatComponentComponent } from './user-stat-component.component';

describe('UserStatComponentComponent', () => {
  let component: UserStatComponentComponent;
  let fixture: ComponentFixture<UserStatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
