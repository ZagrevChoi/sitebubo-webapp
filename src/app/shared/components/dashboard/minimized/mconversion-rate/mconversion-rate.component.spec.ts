import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MconversionRateComponent } from './mconversion-rate.component';

describe('MconversionRateComponent', () => {
  let component: MconversionRateComponent;
  let fixture: ComponentFixture<MconversionRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MconversionRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MconversionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
