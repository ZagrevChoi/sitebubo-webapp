import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiteSpeedComponent } from './esite-speed.component';

describe('EsiteSpeedComponent', () => {
  let component: EsiteSpeedComponent;
  let fixture: ComponentFixture<EsiteSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiteSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiteSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
