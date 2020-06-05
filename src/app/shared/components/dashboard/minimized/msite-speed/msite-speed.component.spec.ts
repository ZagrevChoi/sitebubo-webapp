import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiteSpeedComponent } from './msite-speed.component';

describe('MsiteSpeedComponent', () => {
  let component: MsiteSpeedComponent;
  let fixture: ComponentFixture<MsiteSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiteSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiteSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
