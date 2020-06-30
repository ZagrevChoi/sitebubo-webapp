import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EserverMonitorComponent } from './eserver-monitor.component';

describe('EserverMonitorComponent', () => {
  let component: EserverMonitorComponent;
  let fixture: ComponentFixture<EserverMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EserverMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EserverMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
