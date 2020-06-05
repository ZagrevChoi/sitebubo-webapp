import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuptimeComponent } from './euptime.component';

describe('EuptimeComponent', () => {
  let component: EuptimeComponent;
  let fixture: ComponentFixture<EuptimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuptimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
