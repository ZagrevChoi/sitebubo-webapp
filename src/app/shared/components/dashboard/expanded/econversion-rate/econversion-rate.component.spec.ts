import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconversionRateComponent } from './econversion-rate.component';

describe('EconversionRateComponent', () => {
  let component: EconversionRateComponent;
  let fixture: ComponentFixture<EconversionRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconversionRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconversionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
