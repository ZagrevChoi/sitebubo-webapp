import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoScoreComponent } from './seo-score.component';

describe('SeoScoreComponent', () => {
  let component: SeoScoreComponent;
  let fixture: ComponentFixture<SeoScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
