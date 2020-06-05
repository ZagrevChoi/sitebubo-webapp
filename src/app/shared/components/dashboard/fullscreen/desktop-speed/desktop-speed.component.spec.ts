import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSpeedComponent } from './desktop-speed.component';

describe('DesktopSpeedComponent', () => {
  let component: DesktopSpeedComponent;
  let fixture: ComponentFixture<DesktopSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
