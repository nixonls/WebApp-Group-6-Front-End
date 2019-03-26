import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerInputComponent } from './planner-input.component';

describe('PlannerInputComponent', () => {
  let component: PlannerInputComponent;
  let fixture: ComponentFixture<PlannerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
