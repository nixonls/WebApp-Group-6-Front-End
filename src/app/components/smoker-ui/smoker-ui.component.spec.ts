import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokerUiComponent } from './smoker-ui.component';

describe('SmokerUiComponent', () => {
  let component: SmokerUiComponent;
  let fixture: ComponentFixture<SmokerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
