import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EseoScoreComponent } from './eseo-score.component';

describe('EseoScoreComponent', () => {
  let component: EseoScoreComponent;
  let fixture: ComponentFixture<EseoScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EseoScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EseoScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
