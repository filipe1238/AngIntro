import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSection8Component } from './task-section8.component';

describe('TaskSection8Component', () => {
  let component: TaskSection8Component;
  let fixture: ComponentFixture<TaskSection8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSection8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSection8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
