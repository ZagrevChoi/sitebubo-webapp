import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwordpressComponent } from './ewordpress.component';

describe('EwordpressComponent', () => {
  let component: EwordpressComponent;
  let fixture: ComponentFixture<EwordpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwordpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
