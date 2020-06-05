import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MseoScoreComponent } from './mseo-score.component';

describe('MseoScoreComponent', () => {
  let component: MseoScoreComponent;
  let fixture: ComponentFixture<MseoScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MseoScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MseoScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
