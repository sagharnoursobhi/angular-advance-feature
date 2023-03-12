import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment9Component } from './assignment9.component';

describe('Assignment9Component', () => {
  let component: Assignment9Component;
  let fixture: ComponentFixture<Assignment9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
