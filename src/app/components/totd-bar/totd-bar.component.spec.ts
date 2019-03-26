import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotdBarComponent } from './totd-bar.component';

describe('TotdBarComponent', () => {
  let component: TotdBarComponent;
  let fixture: ComponentFixture<TotdBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotdBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotdBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
