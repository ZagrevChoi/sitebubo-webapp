import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverstationRateComponent } from './converstation-rate.component';

describe('ConverstationRateComponent', () => {
  let component: ConverstationRateComponent;
  let fixture: ComponentFixture<ConverstationRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverstationRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverstationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
