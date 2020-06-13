import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfullReportComponent } from './mfull-report.component';

describe('MfullReportComponent', () => {
  let component: MfullReportComponent;
  let fixture: ComponentFixture<MfullReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfullReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfullReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
